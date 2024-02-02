const NewsCard = () => {
  return (
    <div className="relative h-full snap-center">
      <article class=" p-3 md:p-12 relative h-full">
        <img
          alt="Lava"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class=" m-auto h-2/6 w-full 
        md:h-2/6 object-cover rounded-xl shadow-xl"
        />

        <div class="p-4">
          <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
              Finding the Journey to Mordor
            </h3>
          </a>

          <p class="mt-2 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;
