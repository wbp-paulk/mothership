import { Component, render, h, Fragment } from 'preact';

class MobileMenu {
  constructor() {
    this.options = {
      selector: document.querySelector('.js-main-navigation'),
    };
  }

  setupComponent() {
    const items = () => {
      const items = [];
      for (
        let index = 0;
        index < this.options.selector.firstElementChild.children.length;
        index++
      ) {
        const element = this.options.selector.firstElementChild.children[index];
        const item = {
          link: element.firstElementChild.href,
          text: element.firstElementChild.textContent,
        };
        items.push(item);
      }
      return items;
    };

    class Menu extends Component {
      constructor() {
        super();
        this.state = {
          menuOpen: false,
          menuData: items(),
          currentPage: window.location.pathname,
        };
      }

      toggleMenu() {
        this.setState({ menuOpen: this.state.menuOpen ? false : true });
      }

      render() {
        return (
          <Fragment>
            <button
              className={`main-nav-toggle ${
                !this.state.menuOpen ? '' : ' close-state'
              }`}
              onClick={() => this.toggleMenu()}
            >
              <svg
                class="main-nav-button"
                viewBox="0 0 225 164.7"
                width="22.5"
                height="16.47"
              >
                <rect class="one" y="0" width="225" height="23.7"></rect>
                <rect class="two" y="70.5" width="225" height="23.7"></rect>
                <rect class="three" y="141" width="225" height="23.7"></rect>
              </svg>
              <span className="label">
                {this.state.menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
            <ul
              id="primary-menu"
              className={`menu ${this.state.menuOpen ? 'open' : 'closed'}`}
            >
              {this.state.menuData.map((item, index) => {
                const isCurrent = RegExp(`${item.text.toLowerCase()}`).test(
                  this.state.currentPage
                );
                return (
                  <li key={index} className={`menu-item`}>
                    <a aria-current={isCurrent && true} href={item.link}>
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      }
    }
    render(<Menu />, this.options.selector);
  }

  init() {
    this.setupComponent();
  }
}

export default MobileMenu;
