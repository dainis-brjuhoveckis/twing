import {TwingNodeExpressionBinary} from "../binary";
import {TwingCompiler} from "../../../compiler";
import {TwingNodeType} from "../../../node-type";

export const type = new TwingNodeType('expression_binary_not_equal');

export class TwingNodeExpressionBinaryNotEqual extends TwingNodeExpressionBinary {
    get type() {
        return type;
    }

    compile(compiler: TwingCompiler) {
        compiler
            .raw('!this.compare(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw(')')
        ;
    }
}
