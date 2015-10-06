import React, {PropTypes} from "react";
import AkkadComponent from "./AkkadComponent";
import Babylon from "babylonjs";

class Scene extends AkkadComponent {
	static contextTypes = {
		appState: PropTypes.object,
		actions: PropTypes.object
	}

	static propTypes = {
		beforeRender: PropTypes.func,
		backgroundColor: PropTypes.array
	}

	componentDidMount() {
		const {setScene, startRenderLoop} = this.context.actions;
		
		setScene();
		startRenderLoop();
	}

	componentWillUnmount() {
		const {disposeScene} = this.context.actions;
		
		disposeScene();
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Scene;