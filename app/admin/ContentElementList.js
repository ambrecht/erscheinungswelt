// ContentElementList.server.js

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

/**
 * A Server Component to list content elements.
 * Directly fetches data from the server, bypassing the need for client-side state.
 *
 * @return {JSX.Element} The rendered list or loading/error state
 */

  
export default async function ContentElementList() {
  let data = null;
  let isLoading = true;
  let isError = false;
  let error = null;
    const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

    

  try {
    // The data is fetched directly within the component. How refreshingly straightforward!
    const { data: fetchedData, error: fetchError } = await supabase
      .from('content_elements')
      .select('*');

    if (fetchError) {
      throw new Error(fetchError.message);
    }
    
    data = fetchedData;
    isLoading = false;
  } catch (err) {
    isError = true;
    error = err;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((contentElement) => (
        <li key={contentElement.id}>
          {contentElement.type}: {contentElement.value}
        </li>
      ))}
    </ul>
  );
}
