import { GrFormFilter } from "react-icons/gr";

const CarFilter = ({toggleFilter,handleFilter,isOpen}) => {
    return (
        <div className="car-filter">
            <GrFormFilter size={"30px"}  onClick={toggleFilter} />
            <div id="car-filter-dropdown" className={isOpen ? "open" : ""}>
              <form className="filter-form" method="GET">
                <div className="radio-group">
                  <input type="radio" id="economy" name="segment" value="Economy" onChange={handleFilter} />
                  <label htmlFor="economy">Economy</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="midRange" name="segment" value="Mid-Range"  onChange={handleFilter}/>
                  <label htmlFor="midRange">Mid-range</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="premium" name="segment" value="Premium"  onChange={handleFilter}/>
                  <label htmlFor="premium">Premium</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="luxury" name="segment" value="Luxury" onChange={handleFilter} />
                  <label htmlFor="luxury">Luxury</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="posh" name="segment" value="Posh" onChange={handleFilter} />
                  <label htmlFor="posh">Posh</label>
                </div>
              </form>
            </div>
          </div>
    )
 }

export default CarFilter;