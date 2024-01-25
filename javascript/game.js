let reset = document.getElementsByClassName('reset-game')[0];
reset.addEventListener('click', function(){
    vm.nowPlayerRow = vm.playerRow;
    vm.nowPlayerCol = vm.playerCol;
    vm.nowGrid = JSON.parse(JSON.stringify(vm.grid));
    vm.$nextTick(() => {
        vm.$el.querySelector('.container').focus();
    });
});