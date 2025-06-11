// Estructura base de autenticación (para usar con Supabase)
export const validateUser = (user) => {
  return user && user.email ? true : false;
};