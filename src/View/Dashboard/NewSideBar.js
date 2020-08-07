/*  eslint-disable */
import React from "react";
import "./sidebar.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faUser,
    faEnvelopeSquare,
    faBars,
    faTags,
    faBarcode,
    faClipboardCheck,
    faGift,
    faPlusSquare,
    faTachometerAlt,
    faComment,
    faHome,
    faUserSecret,
    faUsers,
    faSuitcase,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";


import Upload from '../UploadFile/UploadFile'
import Sortlisting from '../SortListing/SortListing'
import Appraisal from '../Appraisal/Appraisal'
import Projectanalysis from '../ProjectAnalysis/ProjectAnalysis'
class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side_bar_toggle: false,
            page:'dashboard'
        };
    }


    onchanePageState = (pagelink) => {
        this.setState({
            page:pagelink
        })
    }

    item = () => {
        if(this.state.page == "dashboard" )
        return (<div>No content</div>)
        if(this.state.page == "getstarted" )
        return (<Upload/>)
        if(this.state.page == "sortlisting" )
        return (<Sortlisting/>)
        if(this.state.page == "appraisal" )
        return (<Appraisal/>)
        if(this.state.page == "projectanalysis" )
        return (<Projectanalysis/>)
    }

    render() {
        const { side_bar_toggle } = this.state;
        const active = null
        return (
            <>
                <nav className="navbar navbar-dark bg-dark py-0 shadow-sm  fixed-top">
                    <span className="navbar-brand mb-0 h6 text-light ml-1">Dashboard
        <FontAwesomeIcon
                            onClick={() => this.setState({ side_bar_toggle: !this.state.side_bar_toggle })}
                            icon={faBars} className="ml-4 click show-icon"></FontAwesomeIcon>
                    </span>
                </nav>

                <div className={`new_sidebar_wrap sidebar-top ${side_bar_toggle ? 'sidebar_active' : ''}`}>
                    <div className="sidebar-header pb-4 pt-2">
                        {/* <div className="d-flex px-1">
                            <img src="./" className="rounded-circle sidebar-image my-auto"></img>
                            <div className="my-auto">
                                <h6 style={{lineHeight: '12px', fontWeight: 600}}
                                    className={`text-white mb-0 mt-1`}>Manager</h6>
                                <span className="small text-light ">manager@gmail.com</span>
                            </div>
                        </div> */}
                    </div>
                    <ul className="sidebar" style={{
                        paddingLeft: '0px', position: 'absolute !important', width
                            : 'unset', top: 'unset'
                    }}>
                        <li className="listitem" className={`listitem ${active == 'dashboard' && 'active_category'}`}>
                            <Link to="/admin/dashboard">
                                <h6 className={`categorylink px-2 ${active == 'dashboard' && 'active_category'}`}>
                                    <FontAwesomeIcon icon={faTachometerAlt} className="mx-3 sidebar-icon"></FontAwesomeIcon>Dashboard
                                </h6></Link>
                        </li>
                        <li className="listitem" className={`listitem`}>

                            <h6 className={`categorylink px-2`}>
                                <FontAwesomeIcon icon={faClipboardCheck} className="mx-3 sidebar-icon"></FontAwesomeIcon>Resumes
                                </h6>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                                
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}} onClick={() => this.onchanePageState("getstarted")}> Analyser</li>
                               
                            </ul>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                                
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}} onClick={() => this.onchanePageState("sortlisting")}> Ranker </li>
                                 
                                
                            </ul>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                               
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}}> Best Candidates  </li>
                                
                            </ul>

                        </li>

                        <li className="listitem" className={`listitem ${active == 'users' && 'active_category'}`}>

                            <h6 className="categorylink px-2">
                                <FontAwesomeIcon icon={faUser} className="mx-3 sidebar-icon"></FontAwesomeIcon> Employees
                                </h6>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                             
                                <li style={{ color: '#c9cbcc' , cursor:'pointer'}} onClick={() => this.onchanePageState("appraisal")}> Survey </li>
                                
                            </ul>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                               
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}}> Key Drivers  </li>
                                
                            </ul>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                               
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}}> Quizzes   </li>
                                
                            </ul>
                        </li>

                        <li className="listitem" className={`listitem ${active == 'managers' && 'active_category'}`}>

                            <h6 className="categorylink px-2">
                                <FontAwesomeIcon icon={faUsers} className="mx-3 sidebar-icon"></FontAwesomeIcon>Assistant
                                </h6>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                                
                            <li style={{ color: '#c9cbcc' , cursor:'pointer'}} onClick={() => this.onchanePageState("projectanalysis")}> Team Allocator   </li>
                               
                            </ul>
                            <ul className="ml-5 mt-2 pt-2" style={{ color: 'white' }}>
                              
                                    <li style={{ color: '#c9cbcc' , cursor:'pointer'}}> Tech Updates  </li>
                                
                            </ul>

                        </li>




                        {/* <li
                            className={`listitem click`}>
                            <h6 className={`categorylink px-2 `}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="mx-3 sidebar-icon"></FontAwesomeIcon>Logout
                </h6>
                        </li> */}
                    </ul>
                </div>

                <div className="" style={{marginLeft:'245px'}}>
                        {this.item()}
                </div>
            </>
        );
    }
}


export default AdminSidebar;
