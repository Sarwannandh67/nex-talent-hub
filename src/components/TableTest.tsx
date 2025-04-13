import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const TableTest = () => {
  const [testResults, setTestResults] = useState<{[key: string]: boolean}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testTables = async () => {
      try {
        setLoading(true);
        const tables = ['profiles', 'creators', 'brands', 'projects', 'testimonials'];
        const results: {[key: string]: boolean} = {};

        for (const table of tables) {
          try {
            const { data, error } = await supabase
              .from(table)
              .select('id')
              .limit(1);

            if (error) {
              console.error(`Error testing ${table}:`, error);
              results[table] = false;
            } else {
              results[table] = true;
            }
          } catch (err) {
            console.error(`Error testing ${table}:`, err);
            results[table] = false;
          }
        }

        setTestResults(results);
      } catch (err) {
        console.error('Error in table testing:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    testTables();
  }, []);

  if (loading) return <div>Testing database connections...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Supabase Table Connection Status</h2>
      <div className="space-y-2">
        {Object.entries(testResults).map(([table, isConnected]) => (
          <div key={table} className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="font-medium">{table}:</span>
            <span>{isConnected ? 'Connected' : 'Not Connected'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTest; 