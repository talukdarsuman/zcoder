import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Navbar() {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [visibleCount, setVisibleCount] = useState(3);
    const [expandedPost, setExpandedPost] = useState(null); // Track the expanded post

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const handleShowLess = () => {
        setVisibleCount(prevCount => Math.max(prevCount - 3, 3));
    };

    const handleSeeMore = (index) => {
        setExpandedPost(index === expandedPost ? null : index); // Toggle expanded state
    };

    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}

            {myData.slice(0, visibleCount).map((post, index) => {
                const { title, body } = post;
                const isExpanded = index === expandedPost;
                return (
                    <section key={index} className="second_section">
                        <div className="left_section_02">
                            <div>Question:</div>
                            <div className={`text_container ${isExpanded ? 'expanded' : ''}`}>{title}</div>
                            <button className="continue_preparation" onClick={() => handleSeeMore(index)}>
                                {isExpanded ? 'See Less' : 'See More'}
                            </button>
                        </div>
                        <div className="right_section_02">
                            <div>Answer:</div>
                            <div className={`text_container ${isExpanded ? 'expanded' : ''}`}>{body}</div>
                            <button className="continue_preparation" onClick={() => handleSeeMore(index)}>
                                {isExpanded ? 'See Less' : 'See More'}
                            </button>
                        </div>
                    </section>
                );
            })}
            <nav style={{display:'flex',justifyContent:'center'}}>
                {visibleCount < myData.length && (
                    <button className="continue_preparation" style={{marginRight:'0px'}} onClick={handleShowMore}>Show More</button>
                )}
                {visibleCount > 3 && (
                    <button className="continue_preparation" style={{marginLeft:'700px'}} onClick={handleShowLess}>Show Less</button>
                )}
            </nav>
        </>
    )
}
