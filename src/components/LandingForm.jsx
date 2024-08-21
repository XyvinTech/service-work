import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import StyledTextArea from "@/ui/StyledTextArea";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { getIndiaState, getIndiaDistrict } from "india-state-district";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const LandingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [service, setService] = useState(null);
  const services = [
    { value: "AC Repair", label: "AC Repair" },
    {
      value: "AC Installation",
      label: "AC Installation",
    },
    { value: "AC Maintenance", label: "AC Maintenance" },
    {
      value: "Washing Machine Repair",
      label: "Washing Machine Repair",
    },
    { value: "Appliances Repair", label: "Appliances Repair" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Hair Services", label: "Hair Services" },
    { value: "Makeup Services", label: "Makeup Services" },
    { value: "Spa Services", label: "Spa Services" },
    { value: "Networking Solutions", label: "Networking Solutions" },
    { value: "CCTV Installation", label: "CCTV Installation" },
    { value: "CCTV Monitoring", label: "CCTV Monitoring" },
  ];
  const [selectedState, setSelectedState] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const states = getIndiaState().map(({ state, code }) => ({
    value: code,
    label: state,
  }));

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    const districts = getIndiaDistrict(selectedOption.value).map(
      (district) => ({ value: district, label: district })
    );
    setDistrictOptions(districts);
  };

  const router = useRouter();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.firstName + " " + data?.lastName);
    formData.append("email", data?.email);
    formData.append("phoneNumber", data?.phoneNumber);
    formData.append("message", data?.description);
    formData.append("state", data?.state?.label);
    formData.append("service", service.label);
    formData.append("district", data?.district?.label);
    if (selectedCourse && selectedCourse.length > 0) {
      selectedCourse.forEach((course) => {
        formData.append("courses[]", course.label);
      });
    } else {
      console.error("No courses selected.");
    }
 

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      // console.log(responseData.message);
      // alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      // alert("Error, please try resubmitting the form");
    }

    reset();
    router.push("/thank");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} marginTop={1}>
          <Grid item xs={isMobile ? 12 : 12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: "First Name is required" }}
              render={({ field }) => (
                <div>
                  <StyledInput {...field} placeholder="First Name" />
                  {errors.firstName && (
                    <Typography color="error">
                      {errors.firstName.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={isMobile ? 12 : 12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <StyledInput {...field} placeholder="Last Name" />
                  {errors.lastName && (
                    <Typography color="error">
                      {errors.lastName.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <StyledInput {...field} placeholder="Email ID" />
                  {errors.email && (
                    <Typography color="error">
                      {errors.email.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{ required: "Phone Number is required" }}
              render={({ field }) => (
                <div>
                  <StyledPhoneInput {...field} />{" "}
                  {errors.phoneNumber && (
                    <Typography color="error">
                      {errors.phoneNumber.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Controller
              name="course"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <StyledSelectField
                  isMulti
                  label="Course"
                  options={courses}
                  placeholder={"Course"}
                  value={selectedCourse}
                  onChange={(selectedOption) => {
                    setSelectedCourse(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  isClearable
                  isSearchable
                />
              )}
            />
          </Grid> */}
          {/* <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <StyledTextArea
                    {...field}
                    placeholder="Add a Description/Enquiry"
                  />{" "}
                  {errors.description && (
                    <Typography color="error">
                      {errors.description.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid> */}
          <Grid item xs={6}>
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field }) => (
                <div>
                  <StyledSelectField
                    {...field}
                    placeholder="State"
                    options={states}
                    onChange={(value) => {
                      field.onChange(value);
                      handleStateChange(value);
                    }}
                    value={selectedState}
                  />
                  {errors.state && (
                    <Typography color="error">
                      {errors.state.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <div>
                  <StyledSelectField
                    {...field}
                    placeholder="District"
                    options={districtOptions}
                    onChange={(e) => field.onChange(e)}
                  />
                  {errors.district && (
                    <Typography color="error">
                      {errors.district.message}
                    </Typography>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="service"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <StyledSelectField
                  label="Service"
                  options={services}
                  placeholder={"Service"}
                  value={service}
                  onChange={(selectedOption) => {
                    setService(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  isClearable
                  isSearchable
                />
              )}
            />
          </Grid>
        </Grid>{" "}
        <Stack justifyContent={"center"} direction={"row"} py={3}>
          <Button fullWidth={isMobile} variant="navbar" type="submit">
            Book your expert now
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default LandingForm;
const ModalContent = styled(Box)(() => ({
  position: "absolute",
  top: "52%",
  left: "65%",
  height: "583px",
  gap: "30px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1B1B18",
  padding: "80px",
  boxShadow: 24,
  p: 4,
  "@media (max-width:600px)": {
    width: "100%",
    left: "50%",
    padding: "30px",
    height: "483px",
  },
}));
