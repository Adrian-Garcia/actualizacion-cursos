$("#sideNav").empty();

$("#sideNav").append(
	`
		<div class="side-nav" id="sideNav">
			<div class="side-nav-inner">
				<div class="side-nav-logo">
					<a href="http://www.centroscomunitariosdeaprendizaje.org.mx/" target="_blank">
						<div class="logo logo-dark" style="background-image: url('assets/images/logo/logo.png')">
						</div>
						<div class="logo logo-white" style="background-image: url('assets/images/logo/logo.png')">
						</div>
					</a>
					<div class="mobile-toggle side-nav-toggle">
						<a href="">
							<i class="ti-arrow-circle-left"></i>
						</a>
					</div>
				</div>
				<!--Inician contenidos laterales-->
				<ul class="side-nav-menu scrollable">
					<li class="nav-item active">
						<a class="mrg-top-30" href="index.html">
							<span class="icon-holder">
								<i class="ti-home"></i>
							</span>
							<span class="title">Bienvenida</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/objetivo/objetivo.html">
							<span class="icon-holder">
								<i class="ei-dart-board"></i>
							</span>
							<span class="title">Objetivos</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/mapa/mapa-conceptual.html">
							<span class="icon-holder">
								<i class="ti-map-alt"></i>
							</span>
							<span class="title">Mapa conceptual</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/metodologia/metodologia.html">
							<span class="icon-holder">
								<i class="ei-achievement"></i>
							</span>
							<span class="title">Metodología</span>
						</a>
					</li>
					<li class="nav-item dropdown">
						<a class="dropdown-toggle" href="javascript:void(0);">
							<span class="icon-holder">
								<i class="ti-agenda"></i>
							</span>
							<span class="title">Módulos</span>
							<span class="arrow">
								<i class="ti-angle-right"></i>
							</span>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="html/temario/temario.html" class="side-index-general">Temario</a>
							</li>
							<!-- Módulo 1 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 1: Conceptos: Estadísticas y datos</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo1/modulo1-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-1.html" class="side-index-general">
											Estadística y datos
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-2.html" class="side-index-general">
												Descripción de los datos
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-3.html" class="side-index-general">
											Recopilación de datos
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-4.html" class="side-index-general">
											Poblaciones y muestras 
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-5.html" class="side-index-general">
											Inferencia 
										</a>
									</li>
									<li>
										<a href="html/modulo1/modulo1-6.html" class="side-index-general">
											Explicación y predicción 
										</a>
									</li>
								</ul>
							</li>

							<!-- Módulo 2 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 2: Conceptos: Variables y escalas</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo2/modulo2-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo2/modulo2-1.html" class="side-index-general">
											Variables y constantes
										</a>
									</li>
									<li>
										<a href="html/modulo2/modulo2-2.html" class="side-index-general">
											Escalas de medición
										</a>
									</li>
									<li>
										<a href="html/modulo2/modulo2-3.html" class="side-index-general">
											Conversión de escalas
										</a>
									</li>
									<li>
										<a href="html/modulo2/modulo2-4.html" class="side-index-general">
											Medición: confiabilidad y validez
										</a>
									</li>
									<li>
										<a href="html/modulo2/modulo2-5.html" class="side-index-general">
											Variables dependientes e independientes
										</a>
									</li>
								</ul>
							</li>

							<!-- Módulo 3 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 3: Interpretación de los gráficos</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo3/modulo3-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo3/modulo3-1.html"
											class="side-index-general">¿Qué es un gráfico?
										</a>
									</li>
									<li>
										<a href="html/modulo3/modulo3-2.html" class="side-index-general">
											Los ejes de un gráfico (X e Y)
										</a>
									</li>
								</ul>
							</li>

							<!-- Módulo 4 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 4: trazado de los gráficos</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo4/modulo4-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo4/modulo4-1.html" class="side-index-general">
											Trazo de un gráfico
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 5 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 5: Distribuciones de frecuencia</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo5/modulo5-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo5/modulo5-1.html" class="side-index-general">
											Variables discretas y continuas
										</a>
									</li>
									<li>
										<a href="html/modulo5/modulo5-2.html" class="side-index-general">
											¿Qué es una distribución de frecuencias?
										</a>
									</li>
									<li>
										<a href="html/modulo5/modulo5-3.html" class="side-index-general">
											Distribuciones de frecuencia relativas
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 6 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 6: Distribuciones de frecuencia continua</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo6/modulo6-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo6/modulo6-1.html" class="side-index-general">
											Distribuciones de frecuencia continuas
										</a>
									</li>
									<li>
										<a href="html/modulo6/modulo6-2.html" class="side-index-general">
											La distribución normal
										</a>
									</li>
									<li>
										<a href="html/modulo6/modulo6-3.html" class="side-index-general">
											Otros tipos de distribuciones continuas
										</a>
									</li>
									<li>
										<a href="html/modulo6/modulo6-4.html" class="side-index-general">
											El concepto de quintil
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 7 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 7: Medidas de tendencia central I</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo7/modulo7-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo7/modulo7-1.html" class="side-index-general">
											Medidas de “Tendencia Central”
										</a>
									</li>
									<li>
										<a href="html/modulo7/modulo7-2.html" class="side-index-general">
											Cálculo de la Media
										</a>
									</li>
									<li>
										<a href="html/modulo7/modulo7-3.html" class="side-index-general">
											El promedio ponderado
										</a>
									</li>
									<li>
										<a href="html/modulo7/modulo7-4.html" class="side-index-general">
											La moda
										</a>
									</li>
									<li>
										<a href="html/modulo7/modulo7-5.html" class="side-index-general">
											La mediana
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 8 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 8: Medidas de tendencia central II</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo8/modulo8-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo8/modulo8-1.html" class="side-index-general">
											Comparación de las Medidas de Tendencia Central
										</a>
									</li>
									<li>
										<a href="html/modulo8/modulo8-2.html" class="side-index-general">
											Mediana versus Media
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 9 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 9: Medidas de dispersión</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo9/modulo9-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo9/modulo9-1.html" class="side-index-general">
											Medidas de Dispersión
										</a>
									</li>
									<li>
										<a href="html/modulo9/modulo9-2.html" class="side-index-general">
											La Desviación Estándar
										</a>
									</li>
									<li>
										<a href="html/modulo9/modulo9-3.html" class="side-index-general">
											Desviación estándar y varianza
										</a>
									</li>
									<li>
										<a href="html/modulo9/modulo9-4.html" class="side-index-general">
											Medidas de Dispersión en Distribuciones Asimétricas
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 10 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 10: Curvas de Lorenz y el índice Gini</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo10/modulo10-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo10/modulo10-1.html" class="side-index-general">
											La Curva de Lorenz
										</a>
									</li>
									<li>
										<a href="html/modulo10/modulo10-2.html" class="side-index-general">
											El Índice de Gini
										</a>
									</li>
								</ul>
							</li>
							<!-- Módulo 11 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 11: El concepto de correlación</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo11/modulo11-0.html" class="side-index-general">
											Introducción
										</a>
										<li>
										<a href="html/modulo11/modulo11-1.html" class="side-index-general">
											Correlación
										</a>
									</li>
									<li>
										<a href="html/modulo11/modulo11-2.html" class="side-index-general">
											Correlación y Causalidad
										</a>
									</li>
									<li>
										<a href="html/modulo11/modulo11-3.html" class="side-index-general">
											Variables dependientes e independientes
										</a>
									</li>
									</li>
								</ul>
							</li>
							<!-- Módulo 12 -->
							<li class="nav-item dropdown">
								<a class="dropdown-toggle" href="javascript:void(0);">
									<span class="title side-index-general">Módulo 12: El coeficiente de correlación</span>
									<span class="arrow">
										<i class="ti-angle-right"></i>
									</span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="html/modulo12/modulo12-0.html" class="side-index-general">
											Introducción
										</a>
									</li>
									<li>
										<a href="html/modulo12/modulo12-1.html" class="side-index-general">
											Coeficiente de Pearson
										</a>
									</li>
									<li>
										<a href="html/modulo12/modulo12-2.html" class="side-index-general">
											Representación Gráfica de la Correlación
										</a>
									</li>
									<li>
										<a href="html/modulo12/modulo12-3.html" class="side-index-general">
											Una Nota sobre Análisis de regresión
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="nav-item active">
						<a href="html/politicas/politicas.html">
							<span class="icon-holder">
								<i class="ei-preview"></i>
							</span>
							<span class="title">Políticas</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/bibliografia/bibliografia.html">
							<span class="icon-holder">
								<i class="ei-open-book"></i>
							</span>
							<span class="title">Bibliografía</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/contacto/contacto.html">
							<span class="icon-holder">
								<i class="ei-email"></i>
							</span>
							<span class="title">Contáctanos</span>
						</a>
					</li>
					<li class="nav-item active">
						<a href="html/creditos/creditos.html">
							<span class="icon-holder">
								<i class="ti-info-alt"></i>
							</span>
							<span class="title">Créditos</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	`);
