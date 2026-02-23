const comments = [
  {
    id: 1,
    name: 'Dilnoza Yusupova',
    role: 'Uy sahibi',
    image: '👩‍💼',
    rating: 5,
    comment: 'Sof Mebel-da mebel tanlash juda oson va qulay edi. Dizaynerimiz Alisher bilan sodir bo\'lgan 30 daqiqalik maslahat mening oilam uchun eng yaxshi qaror bo\'ldi. Mebellar sifati va xizmat juda yuqori darajada!',
    date: '2026-01-15'
  },
  {
    id: 2,
    name: 'Akbar Karimov',
    role: 'Office Manager',
    image: '👨‍💼',
    rating: 5,
    comment: 'Bizdagi ofis interyerini Sof Mebel bilan to\'ldirgan edik. Montaj brigada juda professional va tez ishlarini tamomladilar. 10 kunde barcha mebellar o\'rnatilgan va qulay muhit yaratildi. Tavsiyalayman!',
    date: '2026-01-20'
  },
  {
    id: 3,
    name: 'Gulnora Rahimova',
    role: 'Dizayner',
    image: '👩‍🎨',
    rating: 5,
    comment: 'Men professional dizayner sifatida Sof Mebel bilan hamkorlik qilaman. Ularning Italiya va Skandinaviya kolleksiyalari juda yuqori sifatli. Mijozlarim har doim memnun bo\'lib qotadilar. Bu mening eng sevimli mebel showroomi!',
    date: '2026-02-01'
  }
];

export function CommentsSection() {
  return (
    <section className="w-full bg-beigeMid py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label mb-3">Mijozlar fikri</p>
            <h2 className="section-title">
              Biz haqimizda<br />
              nima deyishadi
            </h2>
          </div>
          <p className="text-sm text-greenDeep/60 max-w-xs">
            Ochko'z Sof Mebel mijozlarining sharhlari va baholari
          </p>
        </div>

        {/* Comments Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="group rounded-2xl border border-beigeDark bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: comment.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-goldAccent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment text */}
              <p className="mb-6 leading-relaxed text-greenDeep/75\">{comment.comment}</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-beigeDark pt-4\">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-goldAccent/15 text-xl\">
                  {comment.image}
                </div>
                <div>
                  <p className="text-sm font-semibold text-greenDeep\">{comment.name}</p>
                  <p className="text-xs text-greenDeep/50\">{comment.role}</p>
                </div>
              </div>

              {/* Date */}
              <p className="mt-4 text-xs text-greenDeep/40\">
                {new Date(comment.date).toLocaleDateString('uz-UZ', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center\">
          <p className="text-sm text-greenDeep/70\">
            Siz ham Sof Mebel mijozlari orasiga qo\'shiling
          </p>
          <a href="#cta\" className="btn-primary\">
            Maslahat sorov qilish
          </a>
        </div>
      </div>
    </section>
  );
}
