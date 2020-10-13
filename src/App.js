import React, { useState, useRef } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

import './App.css';

const App = () => {
	const dragger = useRef('');

	return (
		<div>
			<Draggable
				// axis='x'
				ref={dragger}
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				// grid={[25, 25]}
				scale={1}
				// onStart={this.handleStart}
				// onDrag={this.handleDrag}
				// onStop={this.handleStop}
			>
				<div className='dragger handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>
			<Draggable
				// axis='x'
				ref={dragger}
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				// grid={[25, 25]}
				scale={1}
				// onStart={this.handleStart}
				// onDrag={this.handleDrag}
				// onStop={this.handleStop}
			>
				<div className='dragger handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>
			<Draggable
				// axis='x'
				ref={dragger}
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				// grid={[25, 25]}
				scale={1}
				// onStart={this.handleStart}
				// onDrag={this.handleDrag}
				// onStop={this.handleStop}
			>
				<div className='dragger handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>

			<div className='btn-container'>
				<button className='btn'>Align Horizontally</button>
				<br />
				<br />
				<button className='btn'>Align Vertically</button>
			</div>
		</div>
	);
};

export default App;
