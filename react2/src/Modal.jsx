import React, {useEffect} from 'react'

const Modal = () => {
	useEffect(() => {
	  console.log('модалка отрисовалась');
	  return () => {
		console.log('модалка удалена');
		
	  }
	}, [])

  return (
	<div>
		<h2>Lorem ipsum dolor sit amet.</h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime beatae id natus, dolorem voluptate a velit non aliquam quo quam voluptas ullam laborum nam recusandae veritatis vitae, dolores quae?</p>
		<p>Eius sit itaque aspernatur dolorem deleniti ex quis? Minima rerum, harum eius fuga iste animi perferendis dignissimos quaerat similique facere id libero placeat obcaecati explicabo exercitationem consequuntur quasi mollitia molestias.</p>
		<p>Expedita veniam ex ullam eius a iure sunt culpa, reprehenderit deleniti ratione magni, omnis tenetur reiciendis sequi voluptatibus labore ut eos optio accusamus illo dicta! Sapiente, reiciendis unde. Ut, modi?</p>
		<p>Maiores dolorum inventore modi beatae enim obcaecati id accusantium placeat. Ipsa facilis accusantium quam earum necessitatibus voluptas iusto. Porro molestias ex dignissimos numquam perferendis omnis quod tenetur architecto totam nobis?</p>
	</div>
  )
}

export default Modal