(function(window,document){
	let demo = document.querySelector('#demo');
	let content =document.querySelector('.content');
	let option = content.querySelectorAll('ul li');
	let ul = content.querySelectorAll('ul');
	// let txt = select.querySelector('#txt');
	// txt.addEventListener('keyup',()=>{
	// 	let value = this.value;
	
	// 	if(value==''){
	// 		select.querySelectorAll('option').forEach(e=>{
	// 			e.style.display = 'block';
	// 		});
	// 	}else{
	// 		let pattern = new RegExp(value,'i');
	// 		let arr = [];
	// 		select.querySelectorAll('option').forEach(e=>{
	// 			e.style.display = 'none';
	// 			if(pattern.test(e.value)){
	// 				arr.push(e);
	// 			}
	// 		});
	// 		arr.forEach(e=>{
	// 			e.style.display = 'block';
	// 		})
	// 	}
	// })


	let select = function(){
		this.init();

		this._bind();
	}

	//初始化
	select.prototype.init = function(){
		this.all=[];  //放入所有选项的元素

		this._classify();
		// console.log(this.all);
	}

	select.prototype._classify = function(){
		option.forEach(e=>{
			// console.log(e.innerHTML);
			this.all.push(e);
		})
	}

	//绑定事件
	select.prototype._bind = function(){
		demo.addEventListener('onfoucs',()=>{
			if(content.style.display == 'none'){
				content.style.display = 'block';
			}else{
				content.style.display = 'none';
			}
		});
		// document.querySelector('body').addEventListener('click',()=>{
		// 	if (content.style.display == 'block') {
		// 		content.style.display = 'none';
		// 	}
			
		// })
		ul.forEach(e=>{
			e.addEventListener('mouseover',({target})=>{
				target.style.backgroundColor = '#ccc';
				// alert(target.getAttribute('name'));
			});
			e.addEventListener('mouseout',({target})=>{
				target.style.backgroundColor = '#fff';
			});
			e.addEventListener('click',({target})=>{
				target.style.backgroundColor = 'blue';
				let chosen = document.querySelector('#chosen');
				let pre = chosen.innerHTML;
				let index;
				for(let e of this.all){
					if(e.innerHTML === pre) index = e.getAttribute('name');
				}
				chosen.innerHTML=target.innerHTML;
				let next = chosen.innerHTML;

				document.querySelector('#out').innerHTML = `
					之前的值是  &nbsp;&nbsp;${ pre } --- ${ index }<br/>
					改变后的值是 &nbsp;&nbsp;${ next } --- ${ target.getAttribute('name') }
				`;

			});

		})

		document.querySelector('#txt').addEventListener('keyup',()=>{
			let value = document.querySelector('#txt').value;
			console.log(value);
			if(value===null){
				all.forEach(e=>{

					e.style.display = 'block';
				});
			}else{
				let pattern = new RegExp(value,'i');
				let arr = [];
				this.all.forEach(e=>{
					e.style.display = 'none';
					if(pattern.test(e.innerHTML)){
						arr.push(e);
					}
				});
				arr.forEach(e=>{
					e.style.display = 'block';
				})
			}	
		});

	}

	window.Select = select;
})(window,document);