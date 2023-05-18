import './sidebar.css';

export const SideBar = () => {
  return (
    <nav className='sidebar'>
      <div className='logo d-flex justify-content-between'>
        <a className='large_logo' href='/dashboard'>
          <img src='img/paresseux_sous_officiel.png' alt='' />
        </a>
        <div className='sidebar_close_icon d-lg-none'>
          <i className='ti-close'></i>
        </div>
      </div>
      <ul id='sidebar_menu' className='list-group'>
        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small'>
              <img src='img/paresseux_sous_officiel.png' alt='' />
            </div>
            <div className='nav_title'>
              <span>E-maquis </span>
            </div>
          </a>
          <ul className='list-group'>
            <li className='list-group-item disabled'>
              <a href='/bilan'>
                Bilan <span className='badge badge-info'>Bêta</span>
              </a>
            </li>
          </ul>
        </li>

        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small'>
              <img
                src='img/menu-icon/icone_employee.png'
                alt=''
                // style='height: 29px; width: 29px;'
              />
            </div>
            <div className='nav_title'>
              <span>Employé</span>
            </div>
          </a>
          <ul>
            <li>
              <a href='/utilisateur'> Liste des employés</a>
            </li>
            <li>
              <a href='/ajouteruser'>ajouter</a>
            </li>
          </ul>
        </li>

        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small'>
              <img src='img/menu-icon/icone_ventes.png' alt='' />
            </div>
            <div className='nav_title'>
              <span>Vente</span>
            </div>
          </a>
          <ul>
            <li>
              <a href='/data_table'> Liste des ventes</a>
            </li>
            {/* <!-- <li><a href="/vente">ajouter</a></li> --> */}
          </ul>
        </li>
        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small'>
              <img
                src='img/menu-icon/icone_produits.png'
                className='img-fluid '
                alt='img produits'
              />
            </div>
            <div className='nav_title'>
              <span>Produit</span>
            </div>
          </a>
          <ul>
            <li>
              <a href='/listeproduit'> voir mes produits</a>
            </li>
            <li>
              <a href='/ajouterproduit'>Enregistrer un produit</a>
            </li>

            {/* <% if(locals.user?.isAdmin){ %>
            <li>
              <a href="/ajouter-produit-global">Enregistrer un produit global</a>
            </li>
          <% } %> */}
          </ul>
        </li>
        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small'>
              <img src='img/menu-icon/categorie.svg' alt='' />
            </div>
            <div className='nav_title'>
              <span>Catégories</span>
            </div>
          </a>
          <ul>
            <li>
              <a href='/listcategorie'> Mes catégories</a>
            </li>
            {/* <% if(locals.user?.isAdmin){ %>
          <li><a href="/ajoutercategorie">ajouter</a></li>
          <% } %> */}
          </ul>
        </li>

        <li className=''>
          <a className='has-arrow' href='#' aria-expanded='false'>
            <div className='nav_icon_small icon_anim'>
              <img
                src='img/menu-icon/reglage.png'
                // style='height: 35px; width: 35px;'
                className='img-fluid '
                alt='img remarque'
              />
            </div>
            <div className='nav_title'>
              <span>Paramètres</span>
            </div>
          </a>
          <ul>
            <div className='profile_info_details'>
              <li>
                <a href='/profile'>Mon Profil </a>
              </li>
              <li>
                <a href='/reglage' className='list-group-item disabled'>
                  Réglage<span className='badge badge-info'>Bêta</span>
                </a>
              </li>
              <li>
                <a href='/deconnexion'>Déconnexion </a>
              </li>
            </div>
          </ul>
          <div className='profile_info_details '>
            <a
              href='/deconnexion'
              className='btn btn-danger side-deconnexion  text-dark'
            >
              Déconnexion{' '}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
