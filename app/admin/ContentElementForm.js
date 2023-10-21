import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

/**
 * A Server Component for managing content elements.
 * Fetches and inserts data directly from/to the server.
 * 
 * @typedef {Object} InsertData
 * @property {string} type
 * @property {string} value
 *
 * @returns {JSX.Element} Rendered form
 */
export default async function ContentElementForm() {
  /**
   * Handles form submission and data insertion into the database.
   * 
   * @param {FormData} formData - Form data
   */
  const addContentElement = async (formData) => {
    "use server";
    const type = String(formData.get('type'));
    const value = String(formData.get('value'));
    
    /** @type {InsertData} */
    const insertData = { type, value };
    
    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.from('content_elements').insert([insertData]);

    if (error) {
      console.error('Error inserting content element:', error.message);
      return;
    }
    
    console.log('Inserted content element:', data);
    revalidatePath('/');  // Replace with the path you want to revalidate
  };

  return (
    <form action={addContentElement}>
      <label>
        Type:
        <select name="type">
          <option value="HEADING">Heading</option>
          <option value="PARAGRAPH">Paragraph</option>
          <option value="LINK">Link</option>
          <option value="BUTTON">Button</option>
        </select>
      </label>
      <label>
        Value:
        <input type="text" name="value" required className="bg-gray-800" />
      </label>
      <button type="submit" className="bg-blue-500 text-white">Add Content Element</button>
    </form>
  );
}
