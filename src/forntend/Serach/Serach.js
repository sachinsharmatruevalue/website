import axios from 'axios';
import React, { useState } from 'react'

const Serach = () => {

    const [search, setSearch] = useState('');
    const [prdocut_name, setProductName] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
  

    const data={
        prdocut_name:prdocut_name
    }
    const searchEverything = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        const response = await axios.post(`http://192.168.0.26:4000/api/product/prdocut-serach`,data,)
        console.log("response>>>>>>>>>",response);
        
        setSearchResults(response.data.data || []);
        setShowResults(true);
      } catch (error) {
        console.error('Error searching products:', error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };
  
    const handleInputChange = (e) => {
      setProductName(e.target.value);
      if (e.target.value === '') {
        setShowResults(false);
      }
    };
  
    return (
      <div className="ec-header-bottom d-none d-lg-block">
        <div className="container position-relative">
          <div className="row">
            <div className="header-bottom-flex">
              <div className="align-self-center ec-header-search custom-header">
                <div className="header-search">
                  <form className="ec-search-group-form" onSubmit={searchEverything} style={{width:'450px'}}>
                    <input 
                      className="form-control" 
                      placeholder="I'm searching for..." 
                      type="text" 
                      onChange={handleInputChange}
                      value={prdocut_name}
                    />
                    <button type="submit" style={{ display: 'none' }} />
                  </form>
                  
                  {/* Search results dropdown */}
                  {showResults && (
                    <div className="search-results-dropdown">
                      {loading ? (
                        <div className="search-loading">Loading...</div>
                      ) : searchResults.length > 0 ? (
                        <ul className="search-results-list">
                          {searchResults.map((product) => (
                            <li key={product._id} className="search-result-item">
                              <a href={`/product-details/${product._id}`}>
                                {product.name} - ${product.price}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="no-results">No products found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Serach