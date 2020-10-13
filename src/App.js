import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable'; // Both at the same time

import './App.css';

const App = () => {
	const dragger = useRef('');

	const [postion, setPostion] = useState(null);
	const [isVertical, setIsVertical] = useState(true);

	const alignHorizontally = () => {
		// console.log(dragger.current.state.x);
		// console.log(dragger.current.state.y);
		// setIsVertical(false);
	};

	const alignVertically = () => {
		// console.log(dragger.current.state.x);
		// console.log(dragger.current.state.y);
		setPostion({ x: 0, y: 0 });
	};

	const handleStart = () => {
		setPostion(null);
		// setPostion({ x: 0, y: 0 });
	};

	const handleDrag = () => {
		setPostion(null);
		// console.log('object');
	};

	return (
		<div className='container'>
			<div className={isVertical ? `vertical` : `horizontal`}>
				<Draggable
					// axis='x'
					// ref={dragger}
					handle='.handle'
					defaultPosition={{ x: 0, y: 0 }}
					position={postion}
					// grid={[25, 25]}
					scale={1}
					onStart={handleStart}
					onDrag={handleDrag}
					// onStop={handleStop}
				>
					<div className='dragger handle'>
						<div className='handle'>Drag from here</div>
					</div>
				</Draggable>
				<Draggable
					// axis='x'
					// ref={dragger}
					handle='.handle'
					defaultPosition={{ x: 0, y: 0 }}
					position={postion}
					// grid={[25, 25]}
					scale={1}
					onStart={handleStart}
					onDrag={handleDrag}
					// onStop={handleStop}
				>
					<div className=' dragger2 handle'>
						<div className='handle'>Drag from here</div>
					</div>
				</Draggable>
				<Draggable
					// axis='x'
					ref={dragger}
					handle='.handle'
					defaultPosition={{ x: 0, y: 0 }}
					position={postion}
					// grid={[25, 25]}
					scale={1}
					onStart={handleStart}
					onDrag={handleDrag}
					// onStop={handleStop}
				>
					<div className='dragger3 handle'>
						<div className='handle'>Drag from here</div>
					</div>
				</Draggable>
			</div>

			<div className='btn-container'>
				<button onClick={alignHorizontally} className='btn'>
					Align Horizontally
				</button>
				<br />
				<br />
				<button onClick={alignVertically} className='btn'>
					Align Vertically
				</button>
			</div>
		</div>
	);
};

export default App;
