import Card from "./Card"

function Allcards() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 px-6 py-6">
      <Card
        img="https://images.pexels.com/photos/31835757/pexels-photo-31835757.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Forest"
        desc="A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function."
        tags={['nature', 'trees', 'wild']}
      />
      <Card
        img="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Mountains"
        desc="A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism."
        tags={['nature', 'snow', 'hiking']}
      />

       <Card
        img="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Mountains"
        desc="A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism."
        tags={['nature', 'snow', 'hiking']}
      />
       <Card
        img="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Mountains"
        desc="A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism."
        tags={['nature', 'snow', 'hiking']}
      />
      <Card 
        img="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Beach"
        desc="A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, or cobblestones, or biological sources, such as mollusc shells or coralline algae."
        tags={['sea', 'sand', 'relax']}
      />
      <Card
        img="https://images.pexels.com/photos/33445869/pexels-photo-33445869.jpeg"
        title="Desert"
        desc="A desert is a barren area of land where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life."
        tags={['sand', 'dry', 'hot']}
      />

       <Card
        img="https://images.pexels.com/photos/33445869/pexels-photo-33445869.jpeg"
        title="Desert"
        desc="A desert is a barren area of land where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life."
        tags={['sand', 'dry', 'hot']}
      />

      </div>
    )
}


export default Allcards