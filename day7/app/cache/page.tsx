export default async function FetchLogger() {
    console.log('Rendering FetchLogger component');
  
    const start1 = performance.now();
    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      cache: 'force-cache',
    });
    const data1 = await res1.json();
    const duration1 = performance.now() - start1;
    console.log(data1);
    console.log(`Fetched with force-cache in ${duration1.toFixed(2)} ms`);
  
    const start2 = performance.now();
    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2', {
      cache: 'no-store',
    });
    const data2 = await res2.json();
    const duration2 = performance.now() - start2;
    console.log(data2);
    console.log(`Fetched with no-store in ${duration2.toFixed(2)} ms`);
  
    return (
      <div>
        <h2>Fetch Logger Component</h2>
        <p>Data fetched, check logs!</p>
      </div>
    );
  }