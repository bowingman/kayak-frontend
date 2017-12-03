import React from 'react'
import img1 from '.././images/AccountIcon.png'
import kayak from '.././images/KAYAK.png'
import stars5 from '.././images/5stars.png'
import stars4 from '.././images/4stars.png'
import stars3 from '.././images/3stars.png'
import stars2 from '.././images/2stars.png'
import footer from '.././images/footer.png'
import rightpaneimage1 from '.././images/rightPaneImage1.png'
import rightpaneimage2 from '.././images/rightPaneImage2.png'
import hoteldesc from '.././images/hoteldesc.png'
import * as API from '../api/API';

class SearchResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }



    componentDidMount() {
        API.getHotelSearchResults()
            .then((data) => {
                console.log(JSON.stringify(data.data[0]));
                this.setState({
                    searchResults: data.data
                });
            });
    };

    render() {
        return (
            <div className="container-fluid searchListPage" style={{backgroundColor:"#e4e5ea", paddingBottom:"25px"}}>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><img src={kayak} width={140} style={{paddingTop: 15}}/></a>
                        </div>
                        <ul className="nav">

                            <li className="active"><a href="/"><h2>Home</h2></a></li>
                            <li><a href="/"><h2>Hotels</h2></a></li>
                            <li><a href="/"><h2>Flights</h2></a></li>
                            <li><a href="/"><h2>Cars</h2></a></li>
                            <li><a href="/"><h2>Package</h2></a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row" style={{paddingBottom:'50px'}}>
                    <div className="col-md-3" style={{paddingTop: 15}}>
                        <div className="nav-side-menu col-md-8" style={{textAlign: 'Center', top:'4px', backgroundColor:'white', marginLeft:'100px', height:'500px'}}>
                            <br/><br/>
                            <button type="button" className="btn btn-info filterbuttons" data-toggle="collapse" data-target="#demo">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info filterbuttons" data-toggle="collapse" data-target="#demo1">
                                <h3>Select Ratings</h3>
                            </button>
                            <br/><br/>
                            <div id="demo1" className="collapse">
                                <ul className="list-group">
                                    <li className="">Ratings 10</li>
                                    <li className="">Ratings 7+</li>
                                    <li className="">Ratings 5+</li>
                                    <li className="">Ratings 3+</li>
                                    <li className="">Ratings 1+</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info filterbuttons" data-toggle="collapse" data-target="#demo2">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo2" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info filterbuttons" data-toggle="collapse" data-target="#demo3">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo3" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-6 SearchListMainContainer">
                        {this.state.searchResults.map((task, i) =>
                            <div className="SearchListItemMainContainer">
                                <span className="SearchListItemImage">
                                    <img src={task.hotel_image}/>
                                </span>
                                <span className="SearchListItemMainContent">
                                    <div className="SearchListItemTitle">{task.hotel_name}</div>
                                    <div className="SearchListItemAdd">{task.hotel_address}</div>
                                    <div className="SearchListItemStars">

                                        {
                                        task.hotel_stars == "5" ? (

                                            <img className="recentImage" src={stars5} alt={'logo5'}/>
                                        ) : (
                                            task.hotel_stars == "4" ? (
                                                <img className="recentImage" src={stars4} alt={'logo4'}/>
                                            ) : (
                                                task.hotel_stars == "3" ? (

                                                    <img className="recentImage" src={stars3} alt={'logo3'}/>
                                                ) : (
                                                    task.hotel_stars == "2" ? (

                                                        <img className="recentImage" src={stars2} alt={'logo2'}/>
                                                    ) : (
                                                        <img className="recentImage" src={stars2} alt={'logo2'}/>
                                                    )
                                                )
                                            )
                                        )
                                    }</div>
                                    <div className="SearchListItemRatings">{task.hotel_ratings}</div>
                                    <div className="SearchListItemDesc">{task.hotel_description}</div>
                                    <div className="SearchListItem">
                                        <img className="hoteldesc" src={hoteldesc} alt={'hoteldesc'}/>
                                    </div>
                                </span>
                                <span className="SearchListItemPriceContent">
                                    <div className="SearchListItemPrice">$ {task.hotel_stars}</div>
                                    <button type="button" className="btn btn-info Viewdeal" >View Deal</button>
                                </span>
                            </div>
                        )}


                    </div>
                    <div className="col-md-3">
                        <div className="SearchListPageRightContainer">
                            <div className="SearchListPageRightContainer1">
                                <img className="rightpaneimage1" src={rightpaneimage1} alt={'image1'}/>
                            </div>
                            <div className="SearchListPageRightContainer2">
                                <img className="rightpaneimage2" src={rightpaneimage2} alt={'image2'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default SearchResultPage;
