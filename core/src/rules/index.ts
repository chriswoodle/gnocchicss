import { RuleGenerator, UserConfig } from '../types.js';
// Background
import { BackgroundColor } from './background/background-color.js';

// Border   
import { BorderColor } from './border/border-color.js';
import { BorderRadius } from './border/border-radius.js';
import { BorderStyle } from './border/border-style.js';
import { BorderWidth } from './border/border-width.js';
import { DivideColor } from './border/divide-color.js';
import { DivideStyle } from './border/divide-style.js';
import { DivideWidth } from './border/divide-width.js';

// Effects
import { BackgroundBlend } from './effects/background-blend.js';
import { MixBlend } from './effects/mix-blend.js';
import { Opacity } from './effects/opacity.js';
import { Shadow } from './effects/shadow.js';

// Flexbox and Grid
import { Align } from './flexbox-and-grid/align.js';
import { Flex } from './flexbox-and-grid/flex.js';
import { FlexBasis } from './flexbox-and-grid/flex-basis.js';
import { FlexDirection } from './flexbox-and-grid/flex-direction.js';
import { FlexGrow } from './flexbox-and-grid/flex-grow.js';
import { FlexShrink } from './flexbox-and-grid/flex-shrink.js';
import { FlexWrap } from './flexbox-and-grid/flex-wrap.js';
import { Gap } from './flexbox-and-grid/gap.js';
import { Grid } from './flexbox-and-grid/grid.js';
import { Justify } from './flexbox-and-grid/justify.js';
import { Order } from './flexbox-and-grid/order.js';
import { Place } from './flexbox-and-grid/place.js';

// Layout
import { AspectRatio } from './layout/aspect-ratio.js';
import { BoxDirection } from './layout/box-direction.js';
import { BoxSizing } from './layout/box-sizing.js';
import { Break } from './layout/break.js';
import { Clear } from './layout/clear.js';
import { Columns } from './layout/columns.js';
import { Container } from './layout/container.js';
import { Display } from './layout/display.js';
import { Float } from './layout/float.js';
import { Isolation } from './layout/isolation.js';
import { _Object } from './layout/object.js';
import { Overflow } from './layout/overflow.js';
import { Overscroll } from './layout/overscroll.js';
import { Position } from './layout/position.js';
import { TopRightBottomLeft } from './layout/top-right-bottom-left.js';
import { Visibility } from './layout/visibility.js';
import { ZIndex } from './layout/z-index.js';

// Sizing
import { Height } from './sizing/height.js';
import { MaxHeight } from './sizing/max-height.js';
import { MaxWidth } from './sizing/max-width.js';
import { MinHeight } from './sizing/min-height.js';
import { MinWidth } from './sizing/min-width.js';
import { Size } from './sizing/size.js';
import { Width } from './sizing/width.js';

// Spacing
import { Margin } from './spacing/margin.js';
import { Padding } from './spacing/padding.js';
import { SpaceBetween } from './spacing/space-between.js';

// Typography
import { FontSize } from './typography/font-size.js';
import { FontWeight } from './typography/font-weight.js';
import { LineHeight } from './typography/line-height.js';
import { TextColor } from './typography/text-color.js';
import { TextDecoration } from './typography/text-decoration.js';
import { TextTransform } from './typography/text-transform.js';

// Utilities
import { Breakpoint } from './utilities/breakpoint.js';
import { State } from './utilities/state.js';
import { MergedConfig } from '../config.js';

export function initGenerators(config: MergedConfig): RuleGenerator[] {
    return [
        new BackgroundColor(config),
        new BorderColor(config),
        new BorderRadius(config),
        new BorderStyle(config),
        new BorderWidth(config),
        new DivideColor(config),
        new DivideStyle(config),
        new DivideWidth(config),
        new BackgroundBlend(config),
        new MixBlend(config),
        new Opacity(config),
        new Shadow(config),
        new Align(config),
        new Flex(config),
        new FlexBasis(config),
        new FlexDirection(config),
        new FlexGrow(config),
        new FlexShrink(config),
        new FlexWrap(config),
        new Gap(config),
        new Grid(config),
        new Justify(config),
        new Order(config),
        new Place(config),
        new AspectRatio(config),
        new BoxDirection(config),
        new BoxSizing(config),
        new Break(config),
        new Clear(config),
        new Columns(config),
        new Container(config),
        new Display(config),
        new Float(config),
        new Isolation(config),
        new _Object(config),
        new Overflow(config),
        new Overscroll(config),
        new Position(config),
        new TopRightBottomLeft(config),
        new Visibility(config),
        new ZIndex(config),
        new Height(config),
        new MaxHeight(config),
        new MaxWidth(config),
        new MinHeight(config),
        new MinWidth(config),
        new Size(config),
        new Width(config),
        new Margin(config),
        new Padding(config),
        new SpaceBetween(config),
        new FontSize(config),
        new FontWeight(config),
        new LineHeight(config),
        new TextColor(config),
        new TextDecoration(config),
        new TextTransform(config),
        new Breakpoint(config),
        new State(config),
    ]
}
