const validUrl = /^https?:\/\/.+\.(jpg|jpeg)(\?.*)?$/i;
const unsplashLike = /^https?:\/\/.+\?(.*&)?fm=jpg(&.*)?$/i;

const validateForm = (formData: Record<string, FormDataEntryValue>) => {
  const errors: Record<string, string> = {};
  const name = formData.name as string;
  if (!name || name.length < 3 || name.length > 100) {
    errors.name = 'Name must be between 3 and 100 characters';
  }
  const image = formData.image as string;
  if (!validUrl.test(image) && !unsplashLike.test(image)) {
    errors.image =
      'Image must be a valid JPEG URL (e.g., ends with .jpg or has fm=jpg)';
  }
  const likes = parseInt(formData.likes as string);
  if (isNaN(likes) || likes < 0 || likes > 99) {
    errors.likes = 'Likes must be between 0 and 99';
  }
  return errors;
};

export default validateForm;
