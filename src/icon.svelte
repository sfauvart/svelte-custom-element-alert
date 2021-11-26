<script>
  export let name;
  export let color = 'white';
  export let width = '24px';
  export let height = '24px';

  const imgSrc = new URL(`./assets/icons/${name}.svg`, import.meta.url);

  $: cssStyle = `mask-image: url('${imgSrc}'); -webkit-mask-image: url('${imgSrc}'); background-color: ${color}; width: ${width}; height: ${height}; `;
</script>

<i class="icon" style="{cssStyle}" on:click />

<style type="scss">
  .icon {
    z-index: 2;
    cursor: pointer;
    position: relative;
    display: inline-block;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    -webkit-mask-size: cover;
    mask-size: cover;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
</style>
