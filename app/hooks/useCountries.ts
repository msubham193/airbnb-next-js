import countries from 'world-countries';

const formattedCountries = countries.map((country: { cca2: any; name: { common: any; }; flag: any; latlng: any; region: any; }) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item: { value: string; }) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
