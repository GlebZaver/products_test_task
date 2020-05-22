import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import ProductsContainer from "./components/Products/ProductsContainer";
import NotFound from "./components/NotFound/NotFound";
import { CreateForm, UpdateForm } from "./components/Forms";

import { GlobalStyle } from "./styles";

export function getRoutes() {
	return (
		<HashRouter>
			<GlobalStyle />
			<Main>
				<Switch>
					<Route exact path="/" component={ProductsContainer} />,
					<Route path="/createProducts" component={CreateForm} />,
					<Route path="/updateProducts" component={UpdateForm} />,
					<Route path="*" component={NotFound} />,
				</Switch>
			</Main>
		</HashRouter>
	);
}

export default getRoutes;
