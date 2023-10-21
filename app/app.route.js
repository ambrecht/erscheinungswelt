import { app } from 'next/app';
import supabase from '../lib/supabase';
import Admin from './admin';

export const getServerData = async ({ req }) => {
  const supabase = createMiddlewareClient({ req, res: NextResponse.next() });
  const session = await supabase.auth.getSession();

  return {
    session
  };
};

app((props) => {
  const { session } = props.serverData;

  if (props.router.pathname.startsWith('/admin')) {
    if (!session) {
      return <Login />;
    }
    return <Admin />;
  }

  return <YourRegularAppHere />;
});
