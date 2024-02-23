import React from "react";
import "./Home.css";
import { MdOutlineTimeline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { TbShoppingBagExclamation } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import img1 from "./images/img1.jpg";
import { IoEye } from "react-icons/io5";
import Rechart from "./Rechart";

const Home = () => {
  return (
    <div className="main-div">
      <div className="left">
        <div className="titile">
          <h6>Dashboard</h6>
          <ul>
            <li>
              <FiHome />
              <span>Home</span>
            </li>
            <li>
              <IoAnalytics />
              <span>Analytics</span>
            </li>
            <li>
              <IoPersonOutline />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        <div className="titile">
          <h6>Quick Menu</h6>
          <ul>
            <li>
              <MdOutlineTimeline />
              <span>Users</span>
            </li>
            <li>
              <MdOutlineTimeline />
              <span>Products</span>
            </li>
            <li>
              <BsCurrencyDollar />
              <span>Tranactions</span>
            </li>
            <li>
              <MdOutlineReport />
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="titile">
          <h6>Notifications</h6>
          <ul>
            <li>
              <CiMail />
              <span>Mail</span>
            </li>
            <li>
              <MdOutlineDynamicFeed />
              <span>Feedback</span>
            </li>
            <li>
              <FiMessageSquare />
              <span>Meesages</span>
            </li>
          </ul>
        </div>
        <div className="titile">
          <h6>Stall</h6>
          <ul>
            <li>
              <MdOutlineTimeline />
              <span>Analatics</span>
            </li>
            <li>
              <TbShoppingBagExclamation />
              <span>Manage</span>
            </li>
            <li>
              <MdOutlineTimeline />
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="titile">
          <h6>Feedback</h6>
          <ul>
            <li>
              <MdOutlineTimeline />
              <span>Analatics</span>
            </li>
            <li>
              <TbShoppingBagExclamation />
              <span>Manage</span>
            </li>
            <li>
              <MdOutlineTimeline />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="featurs">
          <div className="feature">
            <span className="fRevenue">Revenue</span>
            <div className="market">
              <span className="reting">$2,415</span>
              <span className="min-icon">
                -11.4
                <FaArrowDown className="downArrow" />
              </span>
            </div>
            <span className="feature-last">Compresed to last month</span>
          </div>
          <div className="feature">
            <span className="fRevenue">Sales</span>
            <div className="market">
              <span className="reting">$2,415</span>
              <span className="min-icon">
                -11.4
                <FaArrowDown className="downArrow" />
              </span>
            </div>
            <span className="feature-last">Compresed to last month</span>
          </div>
          <div className="feature">
            <span className="fRevenue">Cost</span>
            <div className="market">
              <span className="reting">$2,415</span>
              <span className="min-icon">
                -11.4
                <FaArrowUp className="downArrow" />
              </span>
            </div>
            <span className="feature-last">Compresed to last month</span>
          </div>
        </div>
        <div className="secomd-feature">
        <div className="rechart">
        <Rechart />
        </div>
        </div>
        <div className="third-feature">
          <div className="member">
            <h4>New Join Members</h4>

            <div className="latest-member">
              <span className="member-img">
                <img src={img1} alt="img" />
              </span>
              <span className="devo">
                Rakesh Pandey <p className="developer">Software Develoer</p>
              </span>
              <span className="displayEye">
                <IoEye />
                <span>Display</span>
              </span>
            </div>
            <div className="latest-member">
              <span className="member-img">
                <img src={img1} alt="img" />
              </span>
              <span className="devo">
                Rakesh Pandey <p className="developer">Software Develoer</p>
              </span>
              <span className="displayEye">
                <IoEye />
                <span>Display</span>
              </span>
            </div>
            <div className="latest-member">
              <span className="member-img">
                <img src={img1} alt="img" />
              </span>
              <span className="devo">
                Rakesh Pandey <p className="developer">Software Develoer</p>
              </span>
              <span className="displayEye">
                <IoEye />
                <span>Display</span>
              </span>
            </div>
            <div className="latest-member">
              <span className="member-img">
                <img src={img1} alt="img" />
              </span>
              <span className="devo">
                Rakesh Pandey <p className="developer">Software Develoer</p>
              </span>
              <span className="displayEye">
                <IoEye />
                <span>Display</span>
              </span>
            </div>
          </div>
          <div className="member1">
            <h4>New Join Members</h4>
            <div className="join-member">
              <tr className="tableData">
                <th>Customer</th>
                <th>Date</th>
                <th>Amout</th>
                <th>Status</th>
              </tr>
              <tr className="tabler">
                <td className="imgdata">
                  <img src={img1} className="img" alt="img" />
                  <span className="devo">Rakesh Pandey</span>
                </td>
                <td>21 Feb 2024</td>
                <td>24,225</td>
                <td>
                  <button>Pending</button>
                </td>
              </tr>
              <tr className="tabler">
                <td className="imgdata">
                  <img src={img1} className="img" alt="img" />
                  <span className="devo">Rakesh Pandey</span>
                </td>
                <td>21 Feb 2024</td>
                <td>24,225</td>
                <td>
                  <button>Aprove</button>
                </td>
              </tr>
              <tr className="tabler">
                <td className="imgdata">
                  <img src={img1} className="img" alt="img" />
                  <span className="devo">Rakesh Pandey</span>
                </td>
                <td>21 Feb 2024</td>
                <td>24,225</td>
                <td>
                  <button>Pending</button>
                </td>
              </tr>
              <tr className="tabler">
                <td className="imgdata">
                  <img src={img1} className="img" alt="img" />
                  <span className="devo">Rakesh Pandey</span>
                </td>
                <td>21 Feb 2024</td>
                <td>24,225</td>
                <td>
                  <button>Aprove</button>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
