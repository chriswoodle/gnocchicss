import React, { useState, useEffect } from 'react';
import { Text, Box } from 'ink';
import Spinner from './spinner.js';
import { compile } from 'gnocchicss';
import { UserConfig } from '@gnocchicss/core';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

type Status = 'loading-config' | 'generating' | 'writing' | 'done' | 'error';

interface AppProps {
    configPath?: string;
    outDir: string;
}

export function App({ configPath, outDir }: AppProps) {
    const [status, setStatus] = useState<Status>('loading-config');
    const [fileCount, setFileCount] = useState(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        run();
    }, []);

    async function loadConfig(): Promise<UserConfig> {
        if (!configPath) return {};
        const absPath = resolve(configPath);
        if (absPath.endsWith('.json')) {
            return JSON.parse(await readFile(absPath, 'utf-8'));
        }
        const mod = await import(pathToFileURL(absPath).href);
        return mod.default ?? mod;
    }

    async function run() {
        try {
            setStatus('loading-config');
            const config = await loadConfig();

            setStatus('generating');
            const { virtualFileMapping } = await compile(config);

            setStatus('writing');
            const outputDir = resolve(outDir);
            await mkdir(outputDir, { recursive: true });

            const entries = Object.entries(virtualFileMapping);
            for (const [filename, content] of entries) {
                await writeFile(join(outputDir, filename), content);
            }
            setFileCount(entries.length);

            setStatus('done');
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            setStatus('error');
        }
    }

    if (status === 'error') {
        return (
            <Box flexDirection="column">
                <Text color="red" bold>Error: {error}</Text>
            </Box>
        );
    }

    if (status === 'done') {
        return (
            <Box flexDirection="column">
                <Text color="green" bold>Done!</Text>
                <Text>Generated {fileCount} files to <Text bold>{resolve(outDir)}</Text></Text>
            </Box>
        );
    }

    const messages: Record<string, string> = {
        'loading-config': 'Loading config...',
        'generating': 'Generating SCSS...',
        'writing': 'Writing files...',
    };

    return (
        <Box>
            <Text color="cyan"><Spinner type="dots" /></Text>
            <Text> {messages[status]}</Text>
        </Box>
    );
}
