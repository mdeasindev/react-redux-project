import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Pagination = ({ posts, page_id, history }) => {
    const pagArr = new Array(Math.ceil(posts.length / 10)).fill(Math.random());



    const nextPagination = e => {
        e.preventDefault();
        if (page_id < pagArr.length) {
            history.push(`/page/${page_id + 1}`);
        } else {
            history.push(`/page/1`);
        }
    }

    const prevPagination = e => {
        e.preventDefault();
        if (page_id > 1) {
            history.push(`/page/${page_id - 1}`);
        } else {
            history.push(`/page/${pagArr.length}`);
        }
    }

    return (
        <ul className="pagination clearfix">

            <li className="waves-effect"><a onClick={prevPagination} href="#!"><i className="material-icons">chevron_left</i></a></li>

            {pagArr.length ? 
                pagArr.map((page, index) => {
                    
                    return (
                        <li key={index} className={(index + 1) === Number(page_id) ? 'active' : '' } ><NavLink activeClassName={(index + 1) === Number(page_id) ? 'active' : '' } to={`/page/${index + 1}`}>{ index + 1 }</NavLink></li>
                    )
                })
                : ''
            }

            <li className="waves-effect"><a onClick={nextPagination} href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default withRouter(Pagination);