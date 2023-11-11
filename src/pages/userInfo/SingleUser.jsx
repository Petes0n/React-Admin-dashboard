// import Datatable from "../../Components/datatable/Datatable";
import BarChartBox from "../../components/barchartbox/Barchart";
import ChartBox from "../../components/chartbox/ChartBox";
import "./single.scss";

const Single = (props) => {
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://picsum.photos/200"
                alt="picsum"
                className="itemImage"
              />
              <div className="details">
                <h4 className="itemtitle">INFO</h4>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{props.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{props.phonenumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Accra</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ghana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
        </div>
      </div>
    </div>
  );
};

export default Single;
