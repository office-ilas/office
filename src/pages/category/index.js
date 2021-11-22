import * as React from "react";
// import PropTypes from 'prop-types'
import { Link } from "gatsby";
import SeO from "../../components/seo";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
// import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";

const DivisionPageTemplate = ({ data }) => (
  <Layout>
    <SeO title="アカデミック・セントラルの各部門" description="アカデミック・セントラルは，東海国立大学機構における教育の共同基盤の企画立案を行う組織です．" />
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title post-title">アカデミック・セントラルの各部門</h1>

            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-6">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                        <a href="https://www.thers.ac.jp/research/academic-central/" target="_blank" rel="noopener noreferrer">
                          <StaticImage src="../../img/ac1.jpg" alt="アカデミック・セントラル推進企画室" placeholder="blurred" />
                        </a>
                      </div>
                      <div className="column is-12 featured-content ">
                        <h3 className="heading post-category">司令塔</h3>
                        <h1 className="title post-title">アカデミック・セントラル推進企画室</h1>
                        <div className="content">
                          <ul>
                            <li>機構における教育改革に関する施策の企画・立案</li>
                            <li>アカデミック・セントラルの各部門における事業の企画・立案の支援、各部門との連絡調整</li>
                            <li>アカデミック・セントラルが実施する教育の広報</li>
                          </ul>
                        </div>
                        <br />
                        <Link className="btn" to="/division/Promotion-Planning-Office/">
                          Read more
                        </Link>
                      </div>
                    </article>
                  </div>
                  <div className="column post is-6">
                    <article className="columns is-multiline">
                      <div className="column is-12 post-img">
                        <StaticImage src="../../img/ac2.jpg" alt="インストラクショナル・デザインチーム" placeholder="blurred" />
                      </div>
                      <div className="column is-12 featured-content ">
                        <h3 className="heading post-category">全体企画立案</h3>
                        <h1 className="title post-title">インストラクショナル・デザインチーム</h1>
                        <div className="content">
                          <ul>
                            <li>機構としての教育の質の保証・向上のための教学 IR・FD・SD 等の実施、講義の公開の推進、機構におけるリベラル・アーツ科目の調整</li>
                            <li>機構におけるアクティブラーニングの手法（プレゼンテーション、ディスカッション等）、学生の教育への適切な参画方法、デジタル学習教材の活 用方法等、授業における学習デザイン構築の支援、助言、研修の実施</li>
                            <li>機構におけるポートフォリオの活用などによる学修成果の可視化の推進</li>
                            <li>その他機構における教育改革の推進</li>
                          </ul>
                        </div>
                        <br />
                        <Link className="btn" to="/division/Instructional-Design-Team/">
                          Read more
                        </Link>
                      </div>
                    </article>
                  </div>
                </article>
              </div>
            </div>
            <hr />
            <div className="columns is-multiline">
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac3.jpg" alt="⾼⼤接続連携部⾨" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">高校・大学接続関連</h3>
                    <h1 className="title post-title">⾼⼤接続連携部⾨</h1>
                    <div className="content">
                      <ul>
                        <li>高等学校までの学習指導要領の変更及び入試制度改革の動向を踏まえた、両大学における入学者選抜方法の広報の支援</li>
                        <li>高等学校教育の改革に関する情報を収集し、高大接続の観点から、大学教育において適切に対応できるよう、関係部門や両大学へ情報を提供</li>
                        <li>機構における高大接続・連携活動についての企画・立案</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/High-School-University-Articulation/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac4.jpg" alt="高度リベラル・アーツ教育共創部門" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">教養・共通教育</h3>
                    <h1 className="title post-title">高度リベラル・アーツ教育共創部門</h1>
                    <div className="content">
                      <ul>
                        <li>機構としての学部初年次生から大学院生までのシームレスなリベラル・アーツ教育、英語等のコモン・ベーシックス教育の推進</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/Liberal-Arts/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac5.jpg" alt="シームレス数理・データ科学教育共創部門" placeholder="blurred" />
                  </div>
                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">次世代教育</h3>
                    <h1 className="title post-title">シームレス数理・データ科学教育共創部門</h1>
                    <div className="content">
                      <ul>
                        <li>機構における教養教育から学部専門教育、大学院教育までシームレスな数理・データ科学教育の推進</li>
                        <li>両大学が連係した大学院・社会人を対象としたデータサイエンティスト育成事業の実施</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/Data-Science/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac6.jpg" alt="トランスディシプリナリー博士課程教育推進部門" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">高度基盤教育</h3>
                    <h1 className="title post-title">トランスディシプリナリー博士課程教育推進部門</h1>
                    <div className="content">
                      <ul>
                        <li>大学院生に対し、グローバルにその能力を発揮させるために、自分の専門領域の深い学識と卓越した能力に加えて、関係者との協働ネットワークを創造発展させる能力の育成 プロフェッショナル・リテラシーの岐阜大学への展開</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/Doctoral-Education/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac7.jpg" alt="QTA・GSI トレーニングセンター" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">次世代リーダー養成</h3>
                    <h1 className="title post-title">トランスディシプリナリー博士課程教育推進部門ｰ</h1>
                    <div className="content">
                      <ul>
                        <li>大学 院生が QTA、GSI として教育に参画するための体制の構築、育成研修の実施</li>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/QTA/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
              <div className="column post is-6">
                <article className="columns is-multiline">
                  <div className="column is-12 post-img">
                    <StaticImage src="../../img/ac8.jpg" alt="人生構想力教育共創部門" placeholder="blurred" />
                  </div>

                  <div className="column is-12 featured-content ">
                    <h3 className="heading post-category">学生支援、生涯教育</h3>
                    <h1 className="title post-title">⼈⽣構想⼒部⾨</h1>
                    <div className="content">
                      <ul>
                        <li>大学・地域・社会・産業界を構成する人材すべての生涯ウェルビーイングを育てる新たな教育の実施。</li>
                        <ul>
                          <li>学生の社会的・職業的自立に必要な基盤となる能力や態度を育てるキャリア教育の企画</li>
                          <li>大学のノウハウを活用したリカレント教育等の実施</li>
                        </ul>
                      </ul>
                    </div>
                    <br />
                    <Link className="btn" to="/division/Life-Concept/">
                      Read more
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default DivisionPageTemplate;
