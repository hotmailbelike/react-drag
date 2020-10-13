import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Both at the same time

import './App.css';

const App = () => {
	const alignVertically = () => {
		window.location.reload(false);
	};

	return (
		<div className='container'>
			<Draggable
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				scale={1}
			>
				<div className='dragger handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>
			<Draggable
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				scale={1}
			>
				<div className=' dragger2 handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>
			<Draggable
				handle='.handle'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				scale={1}
			>
				<div className='dragger3 handle'>
					<div className='handle'>Drag from here</div>
				</div>
			</Draggable>

			<div className='btn-container'>
				<button onClick={alignVertically} className='btn'>
					Align Vertically
				</button>
			</div>
		</div>
	);
};

export default App;
