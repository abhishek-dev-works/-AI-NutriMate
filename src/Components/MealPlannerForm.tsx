import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import {
  highProteinNonVegetarianFoods,
  highProteinVeganFoods,
  highProteinVegetarianFoods,
} from "../Data/FoodItems";

const useStyles = makeStyles()({
  wrapper: {
    width: 600,
    padding: 20,
    backgroundColor: '#fefefe',
    borderRadius: 10
  },
  field: {
    width: "100%",
    margin: "20px 0",
  },
});

const DietTypeOptions = [
  { id: 0, label: "Vegetarian" },
  { id: 1, label: "Non-Vegetarian" },
  { id: 2, label: "Vegan" },
];
const MealPlannerForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const { classes } = useStyles();
  const dietType = watch("dietType");
  const foods = {
    Vegetarian: highProteinVegetarianFoods,
    "Non-Vegetarian": highProteinNonVegetarianFoods,
    Vegan: highProteinVeganFoods,
  };

  const foodOptions = dietType ? foods[dietType?.label] : [];
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  React.useEffect(() => {
    console.log(dietType);
  }, [dietType]);
  return (
    <div className={classes.wrapper}>
      <h2>Meal Planner Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="height"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Height (cm)"
              {...field}
              fullWidth
              error={!!errors.height}
              helperText={errors.height && "Height is required"}
              className={classes.field}
            />
          )}
        />
        <Controller
          name="weight"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Weight (kg)"
              {...field}
              fullWidth
              error={!!errors.weight}
              helperText={errors.weight && "Weight is required"}
              className={classes.field}
            />
          )}
        />
        <Controller
          name="goalWeight"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Goal Weight (kg)"
              {...field}
              fullWidth
              error={!!errors.goalWeight}
              helperText={errors.goalWeight && "Goal weight is required"}
              className={classes.field}
            />
          )}
        />
        <Controller
          name="timeFrame"
          control={control}
          render={({ field }) => (
            <TextField
              label="Time Frame to Achieve Goal"
              {...field}
              fullWidth
              className={classes.field}
            />
          )}
        />
        <Controller
          name="dietType"
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={DietTypeOptions}
              className={classes.field}
              renderInput={(params) => (
                <TextField {...params} label="Diet Type" />
              )}
              {...field}
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
            />
          )}
        />
        <Controller
          name="foodsToInclude"
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              disabled={!dietType}
              options={foodOptions}
              className={classes.field}
              multiple
              renderInput={(params) => (
                <TextField {...params} label="Foods to include" />
              )}
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
            />
          )}
        />
        <Controller
          name="allergies"
          control={control}
          render={({ field }) => (
            <TextField
              label="Allergies"
              {...field}
              fullWidth
              className={classes.field}
            />
          )}
        />
        <Button type="submit" variant="contained" sx={{bgcolor: '#52B788'}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MealPlannerForm;
