import React, {PropTypes} from "react";
import Babylon from "babylonjs";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {Helpers} from "../../classes";

class Rotate extends AkkadAbstractComponent {
    static propTypes = {
        axis: PropTypes.array.isRequired,
        amount: PropTypes.number.isRequired,
        space: PropTypes.string.isRequired
    }

    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    updateRotation = (props, context) => {
        const {entityID, appState} = context;
        const {amount} = props;
        const axis = new Babylon.Vector3(...props.axis);
        const space = Babylon.Space[props.space];


        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity.rotate(axis, amount, space);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {axis, amount, space} = nextProps;

        if (
            axis !== this.props.axis ||
            amount !== this.props.amount ||
            space !== this.props.space
        ) {
            return true;
        }

        return false;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateRotation(nextProps, nextContext);
    }

    componentWillMount() {
        this.updateRotation(this.props, this.context);
    }
}

export default Rotate;
