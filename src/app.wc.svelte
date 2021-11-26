<svelte:options tag="super-alert" />

<script>
  import Icon from './icon.svelte';

  const imgSrc = new URL(`./assets/icons/warning.svg`, import.meta.url);
</script>

<div class="modal active">
  <div class="modal__header">
    <img src={imgSrc} width="45px" alt="warning" />
    <h1>Warning attack !!!</h1>
    <button class="modal__close-button"><Icon name="close" color="black" /></button>
  </div>
  <div class="modal__content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <div class="modal__footer">
    <button>YES !</button>
    <button>No thanks</button>
  </div>
</div>

<style type="scss">
  $dark: #333;
  $highlight: #ff6666;

  p {
    text-align: justify;
  }
  h1 {
    letter-spacing: 1px;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
  }

  button {
    appearance: none;
    border: 1px solid $dark;
    border-radius: 10px;
    cursor: pointer;
    padding: 4px;
  }

  .modal {
    background-color: $highlight;
    display: flex;
    flex-direction: column;
    left: 50%;
    opacity: 0;
    padding: 10px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    transition: opacity 0.3s ease;
    visibility: hidden;
    z-index: 0;
    border: 1px solid $dark;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 0px $dark;

    &.active {
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }

    &__header {
      display: flex;
      flex-direction: row;
    }

    &__footer {
      display: flex;
      align-self: center;
    }

    &__close-button {
      margin-left: auto;
      align-self: center;
    }

    &__content {
      margin: 10px 0;
    }
  }
</style>
