import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Room from '../components/Room';
import Head from 'next/head';

const RoomCreate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>Cob&apos;s Farm - Room Creation</title>
        <meta
          name="description"
          content="Explore Cob&apos;s Farm, a unique adventure game that combines farming and combat. Join the Alpha Fields and start your adventure today."
        />
        <meta name="keywords" content="Cob&apos;s Farm, adventure game, farming, combat, Alpha Fields" />
        <link rel="icon" href="/TwitterPfp.png" />
      </Head>
      <DndProvider backend={HTML5Backend}>
        <main className="container mx-auto p-4 pt-24"> {/* Added pt-20 for padding at the top */}
          <div className="bg-gray-100 rounded-lg p-4 border border-gray-300 mb-4"> {/* Light background and border */}
            <h1 className="text-3xl font-extrabold mb-4">Design Your Dream Room</h1>
            <p className="text-lg mb-4">
              Elevate your space by uploading custom assets and room backgrounds.
              Simply drag-and-drop your assets to arrange them within the room.
              To undo, double-click on any asset to remove it.
            </p>
          </div>
          <div id="overview">
            <Room />
          </div>
        </main>
      </DndProvider>
    </div>
  );
}; export default RoomCreate;




