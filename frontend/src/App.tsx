import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "./assets/logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  };
}

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu{" "}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{" "}
          está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <GameBanner
              key={game.id}
              adsCount={game._count.Ads}
              title={game.title}
              url={game.bannerUrl}
            />
          ))}
        </div>

        <Dialog.Root>
          <CreateAdBanner />

          <Dialog.Portal>
            <Dialog.Content>
              <Dialog.Title>Publique um anúncio</Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};
