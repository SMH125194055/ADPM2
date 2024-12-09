import { supabase } from '../api/supabaseClient';

export const signupUser = async (email, password, role) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    // Assign role in Supabase database (Optional)
    const { error: roleError } = await supabase
      .from('profiles')
      .insert([{ email, role }]);

    if (roleError) throw roleError;

    return data;
  } catch (err) {
    console.error('Signup Error:', err.message);
    return { error: err.message };
  }
};


export const loginUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
  
      return data;
    } catch (err) {
      console.error('Login Error:', err.message);
      return { error: err.message };
    }
  };
  