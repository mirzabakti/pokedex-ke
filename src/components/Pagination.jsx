// import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
// import { Pagination } from 'react-bootstrap'

function Paginate() {

    // const [items, setItems] = useState ([]);

    // useEffect(() => {

    //     axios
    //     .get('')
    // }, [])

    const handlePageClick = (data) => {
        console.log(data.selected);
        }
return (
    <div>

        {/* <Pagination size="sm">
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
        </Pagination> */}
        <ReactPaginate 
        previousLabel = {'previous'}
        nextLabel = {'next'}
        breakLabel = {'...'}
        pageCount = {25}
        marginPagesDisplayed = {2}
        pageRangeDisplayed = {3}
        onPageChange = {handlePageClick}
        containerClassName = {'pagination justify-content-center'}
        pageClassName = {'page-item'}
        pageLinkClassName = {'page-link'}
        previousClassName = {'page-item'}
        previousLinkClassName = {'page-link'}
        nextClassName = {'page-item'}
        nextLinkClassName = {'page-link'}
        breakLinkClassName = {'page-link'}
        activeClassName = {'active'} 
    />
    </div>
    )   
}

export default Paginate;