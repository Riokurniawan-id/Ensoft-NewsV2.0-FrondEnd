function NewsCard() {
  return (
    <div className="relative h-full snap-center">
      <article className=" p-2 md:p-12 relative h-full">
        <img
          alt="Lava"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className=" m-auto h-2/6 w-full 
          md:h-2/6 object-cover rounded-xl shadow-xl"
        />

        <div className="py-4">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              Finding the Journey to Mordor
            </h3>
          </a>
          <ul className="flex text-sm gap-5 pl-3 mt-2">
            <span className=" rounded-full bg-purple-100 px-4 py-1 text-sm text-purple-700 flex items-center">
              Kategori
            </span>

            <a
              href="{contents.link_sumber}"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1"
            >
              <li className="gap-1 font-semibold text-slate-500 flex items-center">
                {/* <FileText size={15} /> */}
                {/* "{contents.sumber}" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                Sumber Berita
              </li>
            </a>
          </ul>

          <p className="mt-2 text-sm/relaxed text-gray-500">
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
}

export default NewsCard;
