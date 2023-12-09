import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { FaPencilAlt, FaUserAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import payment from '../../assest/image/payment.png'
import Footer from "../footer";
import Header from "../haeder";
import Service from "../service";

const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Header />
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div className="mb-4 toggale_bar">
                <FaUserAlt />
                <span> Returning customer? </span>
                <Link
                  href=""
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Click here to login
                </Link>
                <MdKeyboardArrowDown />{" "}
              </div>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <div className="card">
                    <div className="card-body">
                      <p>If you didnt Logged in Please Log in first</p>
                      <div className="signin-box">
                        <div className="form_group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form_control"
                            name="email"
                          />
                        </div>
                        <div className="form_group">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form_control"
                            name="password"
                          />
                        </div>
                        <div className="form_group mb-0">
                          <button
                            type="submit"
                            className="axil-btn btn-bg-primary submit-btn"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
              <div></div>
              <div className="mb-4 toggale_bar">
                <FaPencilAlt />
                <span> Have a coupon? </span>
                <Link
                  href=""
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                >
                  Click here to enter your code
                </Link>
                <MdKeyboardArrowDown />{" "}
              </div>
              <Collapse in={open1}>
                <div id="example-collapse-text">
                  <div className="card">
                    <div className="card-body">
                      <p>If you have a coupon code, please apply it below.</p>
                      <div className="input-group">
                        <input placeholder="Enter coupon code" type="text" />
                        <div className="apply-btn">
                          <button
                            type="submit"
                            className="axil-btn btn-bg-primary"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="check_bill">
              <h4>Billing details</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form_group">
                    <label>
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" id="first-name" placeholder="Adam" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_group">
                    <label>
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" id="last-name" placeholder="John" />
                  </div>
                </div>
              </div>

              <div className="form_group">
                <label>Company Name</label>
                <input type="text" id="company-name" />
              </div>
              <div className="form_group">
                <label>
                  Country/ Region <span>*</span>
                </label>
                <select id="Region">
                  <option value="3">Australia</option>
                  <option value="4">England</option>
                  <option value="6">New Zealand</option>
                  <option value="5">Switzerland</option>
                  <option value="1">United Kindom (UK)</option>
                  <option value="2">United States (USA)</option>
                </select>
              </div>
              <div className="form_group">
                <label>
                  Street Address <span>*</span>
                </label>
                <input
                  type="text"
                  id="address1"
                  className="mb-3"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  id="address2"
                  placeholder="Apartment, suite, unit, etc. (optonal)"
                />
              </div>
              <div className="form_group">
                <label>
                  Town/ City <span>*</span>
                </label>
                <input type="text" id="town" />
              </div>
              <div className="form_group">
                <label>Country</label>
                <input type="text" id="country" />
              </div>
              <div className="form_group">
                <label>
                  Phone <span>*</span>
                </label>
                <input type="tel" id="phone" />
              </div>
              <div className="form_group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input type="email" id="email" />
              </div>
              <div className=" check_account">
                <input type="checkbox" id="checkbox1" name="account-create" />
                <label htmlFor="checkbox1">Create an account</label>
              </div>
              <>
                <Link
                  href=""
                  className="diff_shippng"
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text1"
                  aria-expanded={open2}
                >
                  <label htmlFor="">Ship to a different address?</label>
                  <input type="checkbox" id="checkbox1" name="account-create" checked />
                </Link>
                <Collapse in={open2}>
                  <div id="example-collapse-text1">
                    <div className="form_group">
                      <label>
                        Country/ Region <span>*</span>
                      </label>
                      <select id="Region">
                        <option value="3">Australia</option>
                        <option value="4">England</option>
                        <option value="6">New Zealand</option>
                        <option value="5">Switzerland</option>
                        <option value="1">United Kindom (UK)</option>
                        <option value="2">United States (USA)</option>
                      </select>
                    </div>
                    <div className="form_group">
                      <label>
                        Street Address <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="address1"
                        className="mb-3"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        id="address2"
                        placeholder="Apartment, suite, unit, etc. (optonal)"
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        Town/ City <span>*</span>
                      </label>
                      <input type="text" id="town" />
                    </div>
                    <div className="form_group">
                      <label>Country</label>
                      <input type="text" id="country" />
                    </div>
                    <div className="form_group">
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input type="tel" id="phone" />
                    </div>
                  </div>
                </Collapse>
              </>
              <div className="form_group">
                <label>Other Notes (optional)</label>
                <textarea id="notes" rows={2} placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="order table-responsive" >
              <h5 className='mb-3'>Your Order</h5>
              <div className="order_table table-responsive">
                <table className="table summery_table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="order_product">
                      <td>Commodo Blown Lamp <span className="quantity">x1</span></td>
                      <td>$117.00</td>
                    </tr>
                    <tr className="order_product">
                      <td>Commodo Blown Lamp <span className="quantity">x1</span></td>
                      <td>$198.00</td>
                    </tr>
                    <tr className="order_product">
                      <td>Subtotal</td>
                      <td>$117.00</td>
                    </tr>
                    <tr className="order_product">
                      <td colSpan={2}>
                        <div className="shipping-amount mb-2">
                          <span >Shipping Method</span>
                          <span>$35.00</span>
                        </div>
                        <div className="input_group">
                          <input type="radio" id="radio1" name="shipping" checked />
                          <label htmlFor="radio1">Free Shippping</label>
                        </div>
                        <div className="input_group">
                          <input type="radio" id="radio2" name="shipping" />
                          <label htmlFor="radio2">Local</label>
                        </div>
                        <div className="input_group">
                          <input type="radio" id="radio3" name="shipping" />
                          <label htmlFor="radio3">Flat rate</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="order_total">
                      <td>Total</td>
                      <td className="order-total-amount">$323.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="payment">
                <div className="singal_payment">
                  <div className="input_group">
                    <input type="radio" id="radio4" name="payment" />
                    <label htmlFor="radio4" className="fw-normal text-dark fs-5 mb-3 mt-3">Direct bank transfer</label>
                  </div>
                  <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                </div>
                <div className="singal_payment">
                  <div className="input_group">
                    <input type="radio" id="radio4" name="payment" />
                    <label htmlFor="radio4" className="fw-normal text-dark fs-5 mb-3 mt-3">Cash on delivery</label>
                  </div>
                  <p>Pay with cash upon delivery.</p>

                </div>
                <div className="singal_payment">
                  <div className="input_group">
                    <input type="radio" id="radio4" name="payment" />
                    <label htmlFor="radio4" className="fw-normal text-dark fs-5 mb-3 mt-3">Paypal</label>
                  </div>
                  <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>

                </div>
              </div>
              <Link href='/checkout'>
                <button className='checkout'>Process to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default CheckOut;
