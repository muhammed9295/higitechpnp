import React, { useState } from "react";
import "./addProjects.css";
import { TextField, Button, Divider, Chip } from "@mui/material";
import Axios from "axios";

function AddProjects() {
  const [projectnumber, setProjectnumber] = useState();
  const [projectname, setProjectname] = useState("");
  const [operationsname, setOperationsname] = useState("");
  const [operationsemail, setOperationsemail] = useState("");
  const [operationsmob, setOperationsmob] = useState(0);
  const [salesname, setSalesname] = useState("");
  const [authoperops, setAuthoperops] = useState("");
  const [clientcontactperson, setClientcontactperson] = useState("");
  const [clientcontactemail, setClientcontactemail] = useState("");
  const [clientcontactmob, setClientcontactmob] = useState(0);
  const [proposalsd, setProposalsd] = useState();
  const [proposalcd, setProposalcd] = useState();
  const [projectit, setProjectit] = useState();
  const [contractsd, setContractsd] = useState();
  const [contracted, setContracted] = useState();
  const [contractvalue, setContractvalue] = useState(0);
  const [paymentterms, setPaymentterms] = useState();
  const [staffsrequired, setStaffsrequired] = useState(0);
  const [relievers, setRelievers] = useState(0);
  const [priceperperson, setPriceperperson] = useState(0);
  const [ctc, setCtc] = useState(0);
  const [projectmaterials, setProjectmaterials] = useState();
  const [monthlymat, setMonthlymat] = useState();

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const addProjects = () => {
    axiosInstance
      .post("/add-projects", {
        projectnumber: projectnumber,
        projectname: projectname,
        operationsname: operationsname,
        operationsemail: operationsemail,
        operationsmob: operationsmob,
        salesname: salesname,
        authoperops: authoperops,
        clientcontactperson: clientcontactperson,
        clientcontactemail: clientcontactemail,
        clientcontactmob: clientcontactmob,
        proposalsd: proposalsd,
        proposalcd: proposalcd,
        projectit: projectit,
        contractsd: contractsd,
        contracted: contracted,
        contractvalue: contractvalue,
        paymentterms: paymentterms,
        staffsrequired: staffsrequired,
        relievers: relievers,
        priceperperson: priceperperson,
        ctc: ctc,
        projectmaterials: projectmaterials,
        monthlymat: monthlymat,
      })
      .then(() => {
        console.log("success");
        console.log("submitted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='projects-container'>
      <div className='projects-wrapper'>
        <div className='text-fields1'>
          <TextField
            sx={{ width: "30%", marginRight: "10px" }}
            id='standard-basic'
            label='Project No.'
            variant='outlined'
            onChange={(e) => {
              setProjectnumber(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            id='standard-basic'
            label='Project name'
            variant='outlined'
            onChange={(e) => {
              setProjectname(e.target.value);
            }}
          />
        </div>

        <div className='text-fields2'>
          <Divider light sx={{ marginBottom: 2 }}>
            <Chip
              label='Operation & Sales'
              sx={{ backgroundColor: "#4599b9", color: "white" }}
            />
          </Divider>

          <div className='subtext'>
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              id='standard-basic'
              label='Operation head name'
              variant='outlined'
              onChange={(e) => {
                setOperationsname(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              id='standard-basic'
              label='Operation head email'
              variant='outlined'
              onChange={(e) => {
                setOperationsemail(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%" }}
              id='standard-basic'
              label='Operation head contact number'
              variant='outlined'
              onChange={(e) => {
                setOperationsmob(e.target.value);
              }}
            />
          </div>
          <div className='subtext'>
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              id='standard-basic'
              label='Sales person'
              variant='outlined'
              onChange={(e) => {
                setSalesname(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%" }}
              id='standard-basic'
              label='Authorized person'
              variant='outlined'
              onChange={(e) => {
                setAuthoperops(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='text-fields3'>
          <Divider light sx={{ marginBottom: 2 }}>
            <Chip
              label='Clients details'
              sx={{ backgroundColor: "#59944D", color: "white" }}
            />
          </Divider>
          {/* <h3 className='title2'>Client contact person</h3> */}
          <div className='subtext'>
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              id='standard-basic'
              label='Client contact person'
              variant='outlined'
              onChange={(e) => {
                setClientcontactperson(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              id='standard-basic'
              label='Client contact email'
              variant='outlined'
              onChange={(e) => {
                setClientcontactemail(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%" }}
              id='standard-basic'
              label='Client contact number'
              variant='outlined'
              onChange={(e) => {
                setClientcontactmob(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='text-fields3'>
          <Divider light sx={{ marginBottom: 2 }}>
            <Chip
              label='Proposal and Contract details'
              sx={{ backgroundColor: "#CE7136", color: "white" }}
            />
          </Divider>
          <div className='subtext'>
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              type='date'
              id='standard-basic'
              label='Proposal sent date'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              placeholder='dd-mm-yyyy'
              onChange={(e) => {
                setProposalsd(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%" }}
              type='date'
              id='standard-basic'
              label='Proposal confirmation date'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setProposalcd(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%", marginLeft: "10px" }}
              type='text'
              id='standard-basic'
              label='Project implementation time'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setProjectit(e.target.value);
              }}
            />
          </div>
          <div className='subtext'>
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              type='date'
              id='standard-basic'
              label='Contract start date'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setContractsd(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%", marginRight: "10px" }}
              type='date'
              id='standard-basic'
              label='Contract end date'
              variant='outlined'
              defaultValue='Default Value'
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setContracted(e.target.value);
              }}
            />
            <TextField
              sx={{ width: "50%" }}
              type='text'
              id='standard-basic'
              label='Contract value'
              variant='outlined'
              onChange={(e) => {
                setContractvalue(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='text-fields3'>
          <Divider light sx={{ marginBottom: 2 }}>
            <Chip
              label='More information'
              sx={{ backgroundColor: "#D79839", color: "white" }}
            />
          </Divider>
          <TextField
            sx={{ width: "100%", marginRight: "10px" }}
            id='standard-basic'
            label='Payment terms'
            variant='outlined'
            onChange={(e) => {
              setPaymentterms(e.target.value);
            }}
          />
        </div>

        <div className='text-fields7'>
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='No. of staff required'
            variant='outlined'
            type='number'
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setStaffsrequired(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='No. of relievers'
            variant='outlined'
            type='number'
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setRelievers(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='Price per person'
            variant='outlined'
            onChange={(e) => {
              setPriceperperson(e.target.value);
            }}
          />
        </div>

        <div className='text-fields8'>
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='CTC'
            variant='outlined'
            onChange={(e) => {
              setCtc(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='Project with material'
            variant='outlined'
            type='text'
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setProjectmaterials(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "50%", marginRight: "10px" }}
            id='standard-basic'
            label='Monthly material'
            variant='outlined'
            onChange={(e) => {
              setMonthlymat(e.target.value);
            }}
          />
        </div>

        <div className='addProject'>
          <Button
            sx={{ backgroundColor: "yellowgreen", width: "20%", height: 50 }}
            variant='contained'
            onClick={addProjects}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddProjects;
