import React from "react";
import { Pagination } from "react-materialize";

const Paginate = props => (
    <Pagination items={10} activePage={2} maxButtons={8} />
)

export default Paginate;