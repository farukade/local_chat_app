import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const favoriteFoodEnum = z.enum(["🍔 Burger", "🍕 Pizza", "🌭 Hotdog", "🌮 Taco", "🍣 Sushi"]);

const favFoodSchema = z.object({
  favoriteFood: favoriteFoodEnum,
  description: z.string().nonempty(),
});

// infer a type of schema to be my form type
export type FavFoodFormType = z.infer<typeof favFoodSchema>;

// set expected props
type FavFoodFormProps = {
  onSubmitfunction: (data: FavFoodFormType) => void;
};

const ViewContacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FavFoodFormType>({
    //Specify FavFoodForm as generic type
    resolver: zodResolver(favFoodSchema),
  });

  const submitHandler = (data: FavFoodFormType) => {
    // onSubmitfunction(data);
  };

  // const handleSubmit = (data: FavFoodFormType) => {
  //   alert(JSON.stringify(data, null, 2));
  // };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Select Your Favorite Food</h2>
      </div>

      <div>
        <label htmlFor="favoriteFood" className="sr-only">
          Favorite Food
        </label>
        <Controller
          render={({ field }) => (
            <select
              {...field}
              className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            >
              <option disabled>Select your favorite food</option>
              {favoriteFoodEnum.options.map((food) => (
                <option key={food} value={food}>
                  {food}
                </option>
              ))}
            </select>
          )}
          name="favoriteFood"
          control={control}
        />
        {errors.favoriteFood && <p className="text-red-600">This field is required</p>}
      </div>

      {/* second form */}
      <div>
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          {...register("description")}
          className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          placeholder="Why do you like it?"
        />
        {errors.description && <p className="text-red-600">This field is required</p>}
      </div>
      <div>
        <button
          type="submit"
          className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ViewContacts;
