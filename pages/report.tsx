import React, { useEffect, useState } from 'react';
import allowedValues from '../data/coblooperNftIds.json';
import { sortAndPrepareData, getDistinctData } from '../utils/dataProcessing';
import PlayerCard from '../components/PlayerCard';

type ReportItem = [string, string, number, string]; // Add string type for the image URL

const ReportPage = () => {
  const [reportData, setReportData] = useState<[string, string, number][]>([]);


  useEffect(() => {
    fetchData()
      .then(getDistinctData)
      .then(sortAndPrepareData)
      .then(data => {
        setReportData(data);
      });
  }, []);



  return (
    <div className="p-4 pt-24 flex justify-center">
      <div className="sm: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {reportData.map((item, index) => {
          let rank = '';
          if (index === 0) rank = 'gold';
          else if (index === 1) rank = 'silver';
          else if (index === 2) rank = 'bronze';

          return (
            <PlayerCard
              key={index}
              walletAddress={item[0]}
              nft={item[1]}
              experience={item[2]}
              position={index + 1}
              rank={rank}
            />
          );
        })}
      </div>
    </div>
  );

}
async function fetchData(): Promise<ReportItem[]> {
  try {
    const response = await fetch('/api/proxy');
    const data: ReportItem[] = await response.json();

    const dataWithImages: ReportItem[] = await Promise.all(data.map(async (item) => {
      const nftResponse = await fetch(`/api/loopexchange/${item[1]}`);
      const nftData = await nftResponse.json();
      const imageUrl = nftData.imageCached; // Extract the image URL
      return [item[0], item[1], item[2], imageUrl]; // Construct the new tuple
    }));

    return dataWithImages;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
}


export default ReportPage;