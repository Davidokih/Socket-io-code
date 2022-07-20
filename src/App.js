// import React from "react";
// import ItemPage from "./components/itemPage/itemPage";
// import Items from "./components/Items/items";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path='/' element={<ItemPage />} />

// 				<Route path='/items' element={<Items />} />
// 			</Routes>
// 		</BrowserRouter>
// 	);
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./socket/Card";


const App = () => {
	return (
		<div>
			<Card />
		</div>
	);
};

export default App;
