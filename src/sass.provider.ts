import { Provider } from "@nestjs/common";

export const sassProvider: Provider = {
    provide: 'SASS',
    useFactory: async () => {
        try {
            return await import('sass-embedded');
        } catch (error) {
            // Sass embedded compiler not found, trying sass
        }

        try {
            return await import('sass');
        } catch (error) {
            throw new Error('Sass compiler not found, please install sass-embedded or sass');
        }
    }
}