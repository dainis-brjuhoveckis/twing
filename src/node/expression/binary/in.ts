import {TwingNodeExpressionBinary} from "../binary";
import {TwingCompiler} from "../../../compiler";

export class TwingNodeExpressionBinaryIn extends TwingNodeExpressionBinary {
    compile(compiler: TwingCompiler) {
        compiler
            .raw('Twing.twingInFilter(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw(')')
        ;
    }
}
