import '../styles/globals.scss'
import {Contexts} from "../components/Contexts";
import React from "react";
import '../styles/AllBoardsPage/AllBoardsPage.scss'
import '../styles/AllBoardsPage/AllBoardsGridItem.scss'
import '../styles/AllBoardsPage/AllBoardsPageGrid.scss'
import '../styles/AllBoardsPage/BoardsPageHeader.scss'
import '../styles/BoardPage/AddCardButton.scss'
import '../styles/BoardPage/BoardColumn.scss'
import '../styles/BoardPage/BoardColumnHeader.scss'
import '../styles/BoardPage/BoardHeader.scss'
import '../styles/BoardPage/BoardItem.scss'
import '../styles/BoardPage/BoardPage.scss'
import '../styles/Header/Header.scss'
import '../styles/Header/ProfileDropdown.scss'
import '../styles/Header/Searchbar.scss'
import '../styles/Auth.scss'



function MyApp({ Component, pageProps }) {
  return <Contexts>
    <Component {...pageProps} />
  </Contexts>
}

export default MyApp
