import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// material-ui
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";

// project import
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/auth/selectors";
import { fetchAllPrices, updatePlan } from "../utils/AdjustPrice";
import { selectPrices } from "../store/priceMng/selectors";
import { useState } from "react";
import { Modal } from "../components";
// import { useDispatch } from 'react-redux';

// ==============================|| Price Management PAGE ||============================== //

const Price = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [prices, setPrices] = useState([]);
  const data = useSelector(selectPrices);
  const handleUpdate = () => {
    // setIsUpdated(false);
    // console.log(prices);
    dispatch(updatePlan(prices));
    // setModalOpen(true);
  };
  const handlePriceChange = (e, index) => {
    const newValue = e.target.value;

    // Create a copy of the array and update the specific element
    const updatedArray = [...prices];
    updatedArray[index] = { ...updatedArray[index], price: newValue };

    setPrices(updatedArray);
  };
  const handleCreditPriceChange = (e, index) => {
    const newValue = e.target.value;

    // Create a copy of the array and update the specific element
    const updatedArray = [...prices];
    updatedArray[index] = { ...updatedArray[index], creditPrice: newValue };

    setPrices(updatedArray);
  };
  const handleSubsPriceChange = (e, index) => {
    const newValue = e.target.value;

    // Create a copy of the array and update the specific element
    const updatedArray = [...prices];
    updatedArray[index] = { ...updatedArray[index], subs_price: newValue };

    setPrices(updatedArray);
  };
  const updatePrice = () => {
    console.log("updated Price", prices);
    dispatch(updatePlan(prices));
  };
  useEffect(() => {
    if (token) {
      dispatch(fetchAllPrices(token));
    }
  }, [token, dispatch]);
  useEffect(() => {
    setPrices(data);
  }, [data]);
  const className = isModalOpen ? "my-32 blur-sm" : "my-32";
  return (
    <>
      <div className={className}>
        <Grid container spacing="3" justifyContent="center">
          <Grid item>
            <Card>
              <CardHeader />
              {isUpdated ? (
                <div className="mb-3 flex justify-end mx-3">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleUpdate}
                  >
                    Save
                  </Button>
                  <span className="mx-1"></span>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setIsUpdated(false)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="mb-3 flex justify-end mx-3">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => setIsUpdated(true)}
                  >
                    Edit
                  </Button>
                </div>
              )}

              <Divider />

              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>A basic table example with a caption</caption>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Subscribe Price</TableCell>
                        <TableCell align="left">Credit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {prices?.map((price, key) => (
                        <TableRow key={key}>
                          <TableCell component="th" scope="row">
                            {price?.plan}
                          </TableCell>
                          <TableCell align="center">
                            <div className="flex items-center">
                              {isUpdated ? (
                                <div className="">
                                  <input
                                    type="number"
                                    value={price?.price}
                                    style={{
                                      width: "60px", // Set the width in pixels
                                      height: "30px", // Set the height in pixels
                                      padding: "5px", // Set padding to create space around the input
                                    }}
                                    onChange={(e) => handlePriceChange(e, key)}
                                  />
                                </div>
                              ) : (
                                price?.price
                              )}
                              <span className="ml-1">€</span>
                            </div>
                          </TableCell>
                          <TableCell align="left">
                            <div className="flex items-center">
                              {isUpdated ? (
                                <div className="">
                                  <input
                                    type="number"
                                    value={price?.subs_price}
                                    style={{
                                      width: "60px", // Set the width in pixels
                                      height: "30px", // Set the height in pixels
                                      padding: "5px", // Set padding to create space around the input
                                    }}
                                    onChange={(e) =>
                                      handleSubsPriceChange(e, key)
                                    }
                                  />
                                </div>
                              ) : (
                                price?.subs_price
                              )}{" "}
                              <span className="ml-1">€</span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            <div className="flex items-center">
                              {isUpdated ? (
                                <div className="">
                                  <input
                                    type="number"
                                    value={price?.creditPrice}
                                    style={{
                                      width: "60px", // Set the width in pixels
                                      height: "30px", // Set the height in pixels
                                      padding: "5px", // Set padding to create space around the input
                                    }}
                                    onChange={(e) =>
                                      handleCreditPriceChange(e, key)
                                    }
                                  />
                                </div>
                              ) : (
                                price?.creditPrice
                              )}{" "}
                              <span className="ml-1">€</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Confirm to Save.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={updatePrice}
                className="text-white bg-basic hover:bg-green-400 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-500 hover:bg-white rounded-lg border border-red-500 text-sm font-medium px-5 py-2.5 hover:text-red-500"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Price;
